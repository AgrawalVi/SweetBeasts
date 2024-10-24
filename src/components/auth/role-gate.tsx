'use client'

import { UserRole } from '@prisma/client'

import { useCurrentRole } from '@/hooks/use-current-role'

interface RoleGateProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
}

export const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
  const role = useCurrentRole()

  if (!role || !allowedRoles.includes(role)) {
    return <div>You are not authorized to view this page</div>
  }

  return <>{children}</>
}
