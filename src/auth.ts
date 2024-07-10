import NextAuth, { type DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import { UserRole } from '@prisma/client'
import authConfig from '@/auth.config'

import { getUserById, verifyUser } from '@/data/shop/user'
import {
  deleteTwoFactorConfirmationById,
  getTwoFactorConfirmationByUserId,
} from '@/data/auth/two-factor-confirmation'

import { cookies } from 'next/headers'
import { cartLoginHandler } from './utils/cart-utils'
import { getCartByGuestId } from './data/shop/cart'

declare module 'next-auth' {
  /**
   * Add any extra fields to the session that are not part of the default session
   */
  interface Session {
    user: {
      firstName: string
      lastName: string
      role: UserRole
      isTwoFactorEnabled: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    firstName?: string
    lastName?: string
    role?: UserRole
    isTwoFactorEnabled: boolean
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },

  events: {
    async linkAccount({ user }) {
      await verifyUser(user.id)
    },
  },

  callbacks: {
    async signIn({ user, account }) {
      // don't allow any 0Auth logins
      if (account?.provider !== 'credentials') {
        return false
      }

      const existingUser = await getUserById(user.id)

      // Prevent sign-in without email verification
      if (!existingUser?.emailVerified) {
        return false
      }

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        )

        if (!twoFactorConfirmation) {
          return false
        }

        // Delete two factor conformation for next sign in
        await deleteTwoFactorConfirmationById(twoFactorConfirmation.id)
      }
      // Need to transfer cart information before completing the login if there's a guestId
      const guestId = cookies().get('guestId')?.value

      if (guestId && user.id) {
        const guestCart = await getCartByGuestId(guestId)
        if (guestCart) {
          await cartLoginHandler(guestCart, guestId, user.id)
        }
      }
      return true
    },
    async session({ token, session, user }) {
      // console.log({ sessionToken: token })

      if (token.role && session.user) {
        session.user.role = token.role
      }

      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (session.user) {
        session.user.firstName = token.firstName as string
        session.user.lastName = token.lastName as string
        session.user.email = token.email as string
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return null // Sub field in token stores the ID of the user

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.firstName = existingUser.firstName
      token.lastName = existingUser.lastName
      token.email = existingUser.email
      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled
      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
