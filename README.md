# [SweetBeasts](https://www.sweetbeasts.shop)

## Tech Stack

- ### Programming Language

  - [**TypeScript**](https://www.typescriptlang.org/)

- ### Frameworks and Libraries

  - [**Next.js**](https://nextjs.org/)
  - [**React**](https://react.dev/)
  - [**Tailwind CSS**](https://tailwindcss.com/)
  - [**Framer Motion**](https://www.framer.com/motion/)
  - [**AuthJS**](https://authjs.dev/)
  - [**MDX**](https://mdxjs.com/)
  - **Other Libraries:** [ShadCN UI Components](https://ui.shadcn.com/), [AceternityUI Components](https://ui.aceternity.com/), [React Email](https://react.email/), [Lucide](https://lucide.dev/), [Tabler](https://tablericons.com/), [Zod Form Validation](https://zod.dev/)

- ### Database

  - [**PostgreSQL**](https://www.postgresql.org/)
  - **ORM:** [Prisma](https://www.prisma.io/)

- ### DevOps and Deployment
  - **Email Client:** [Resend](https://resend.com/home)
  - **Payments:** [Stripe](https://stripe.com/)
  - **Server:** [Neon](https://neon.tech/)
  - **Deployment:** [Vercel](https://vercel.com/home)
  - **Version Control:** [GitHub](https://github.com/)

## File Structure

- Naming Conventions:

  - File names - `kebab-case`
  - TSX Component Names - `PascalCase`
  - TS Function Names - `camelCase`

- `@/` import alias points to src folder.

- `@/actions` - This program utilizes [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

  - Split into folders based on the type of action.
    - Customer contains any fetching to data regarding customer information such as orders and cart
    - Auth contains all actions for authentication
    - Stripe contains all Stripe authentication
  - **Server actions create or delete data, while the functions in the data folder do all data fetching.**
    - They should return `{error: <ERROR_MESSAGE>}` upon any error, or `{success: <SUCCESS_MESSAGE>}` upon any success and the frontend should notify the user accordingly based on the error that's occurred.

- `@/app` - Folder for App Router. Read more [here](https://nextjs.org/docs/app/building-your-application/routing)

  - Should only contain api folder and folder for page routes
  - Pages inside `(floating-nav-pages)` contain the floating glass navbar, and pages inside `(full-nav-pages)` will have the wide navbar at the top of the page. There should be no page at the root of the app folder

- `@/components` - contains all modular components in the application. This folder is split into many subfolders"

  - Aceternity: Only AceternityUI components used from online
  - Auth: Components used for any authentication portions in the website
  - Custom: Any custom components that can be used throughout the site for effects and wrappers
  - Custom: This contains components that are not necessarily specific to a necessary page and can be used among many pages. Look at the files in there to see what kind of Components fit in there. (They are usually smaller components)
  - General: Contains components used for specific pages throughout the site. Should be split up into folders similar to app router to show which page the component is fore
  - Map: Self Explanatory
  - UI: Only ShadCN components and a few ShadCN extensions found online

  `@/data` - contains all data fetching functions

  - Data fetching should be done in the data folder, while data creation is done in server actions after making all the necessary checks.
  - Split into folders and files based on the actions that are made

  `@/hooks` - contains all the custom hooks used in the application

  `@/lib` - contains all the creation of classes that are used throughout the application. Take a look to see the types of files that are included here.

  `@/schemas` - contains a sole file `index.ts` with all the zod schemas for any forms used throughout the application

## Libraries being used and for what purpose:

### [Next.js](https://nextjs.org/docs)

- Version 14, using the app router. Whenever looking through forums for help, make sure to look for the **APP ROUTER** and **NOT** the **PAGES ROUTER**
- Look at the docs for any help or questions regarding the framework

### [React](https://react.dev/reference/react)

- Version 18

### [ShadCN](https://ui.shadcn.com/docs)

- This is the UI library that we are using. All of the components that we can use are in the @/components/ui folder.
- ShadCN also provides a universal color scheme for the application. This colorscheme has been customized to fit SweetBeasts colors, and it can be found in the `global.css` file, along with the variables associated, which can be found in `tailwind.config.js`
- Some ShadCN components are built off Radix primitives, and the API reference for Radix is more in depth for those components. [Link to RadixUI Docs](https://www.radix-ui.com/primitives/docs/overview/introduction)
  - Take a look at this for what kind of customization can be done to the components that are in ShadCN. Most of the components have the same structure as the ShadCN files, but for some, ShadCN either combines or omits some elements, so just watch for that.

### [Lucide-React](https://lucide.dev/icons/)

- 1 of 2 icon libraries being used

### [Tabler React Icons](https://tabler.io/docs/icons/react) - [Icons](https://tablericons.com/)

- 2 of 2 icon libraries being used

### [TailwindCSS](https://tailwindcss.com/docs/installation)

- Library for inline styling. Documentation is very good
- `import { cn } from @/lib/utils` can be used to use TailwindMerge, which is an easy way to combine tailwind classes conditionally.
  - Usage Example: `className = {cn("text-5xl font-bold", error ? text-red : text-black)}`
- `tailwind.config.js` contains all theming extensions that are used throughout the application. Some of the classes were added for ShadCN so don't worry too much about those (mostly the animations and keyframe ones).
- If this is your first time using tailwind, I'd highly recommend reading through the core concepts tabs in the documentation. Those outline everything very nicely. As of now, mobile support and dark mode are not priorities.
- The documentation for tailwind is generally very good so if you are ever wondering what a class does or how to do something searching there is always helpful.

### [React-Spinners](https://www.davidhu.io/react-spinners/) - [Storybook](https://www.davidhu.io/react-spinners/storybook/?path=/docs/barloader--main)

- Loading spinners used throughout the application.

### [Zod](https://zod.dev/)

- Used for form validation
- ShadCN has a great write-up for how to use with their components [here](https://ui.shadcn.com/docs/components/form)
- Place all schemas in `@/schemas/index.ts` and verify validity on the server side as well as the client side.

### [Framer Motion](https://www.framer.com/motion/https://www.framer.com/motion/)

- Animation library, take a look at the docs for more information

### [AceternityUI](https://ui.aceternity.com/components)

- Copy Paste Animation components. Most of these have a cn import, so make sure to change the cn import at the top of the page to point to where our cn folder is: `@/lib/utils`
  - When importing components, follow instructions but keep in mind that our `cn` function is located at a different place in our folder, along with where we place them.
  - **DO NOT** put them in `@/components/ui`, but instead put them in the `@components/aceternity` folder
- These components will require a good amount of customization to be used properly in our app.

### [Prisma](https://www.prisma.io/docs)

- Using PostgreSQL
- ORM for the application
- Make sure `prisma.schema` is most updated version, cross check with everyone on the team before making changes to the database schema to make sure you have the most up to date file, as well as the `sweetbeasts-admin` repository as they share the same database connection
- `npx prisma generate` to use prisma client while developing
- `npx prisma db push` to push changes to the database
- `npx prisma studio` to open a localhost of the database (very useful!!)
- `data` folder should contain all data fetching, while `server actions` contain calls to add new data as well as updates and deletes after making all the necessary checks

### [AuthJS](https://authjs.dev/reference/overview)

- Using `next-auth v5`
- Library used for Authentication
- Using Credentials and Google as the main providers.

### [Resend](https://resend.com/docs/send-with-nodejs)

- Email Client
- Emails should be sent from the `@/lib/resend` folder, but those should be called from server actions

### [Stripe](https://docs.stripe.com/api)

- Handles Payments
- Calls should be made from the `@/lib/stripe` folder, but those should be called from server actions

### [MDX](https://mdxjs.com/docs/)

- Markdown for the web
- Not yet configured, but will be used

### [React Email](https://react.email/docs/introduction)

- Used for making email templates
- All components should be placed in `@/components/emails`
- Not yet configured, but will be used

## Branch Naming

- **main** - current production branch, production website link [here](https://www.sweetbeasts.shop)
- **develop** - current branch with latest merged dev changes. Merged into main from here
- **dev/<YOUR_NAME>-main** - Developer's main branch, merged off develop, and all their branches merged into here, to be PRd into develop
- **<YOUR_NAME>/<FEATURE/PAGE/TICKET>** - Developer's branch for what is currently being worked on.
