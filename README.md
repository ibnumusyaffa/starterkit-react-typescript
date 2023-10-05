# React Starter

[https://starterkit-react-typescript.vercel.app](https://starterkit-react-typescript.vercel.app)

## What's in the stack ?

- ⚡️ Next.js 13
- ⚛️ React 18
- 🛠️ TypeScript 5.1
- 🎨 [TailwindCSS 3](https://tailwindcss.com)
- 💎 Prebuilt customizable components using TailwindCSS, [Radix UI](https://www.radix-ui.com/),React Aria
- 🚀 [Tanstack Query](https://tanstack.com/query) for async state management (fetching, caching, synchronizing)
- 💾 [Zustand](https://zustand-demo.pmnd.rs) for state management
- 📁 Absolute Import and Path Alias — Import components using `@/` prefix
- 🔍 ESLint — To find and fix problems in your code
- 📝 Prettier — Format your code consistently
- 🌍 Internationalization (i18n) with [next-international](https://github.com/QuiiBz/next-international) 

## Feature Based Folder Structure

```md
├── components  # global components used across the entire application
│   ├── button
│   └── dialog
├── features  # feature spesific components or code in general
│   ├── login
│   ├── products-management
│   ├── roles-management
│   ├── settings
│   └── users-management
├── hooks  # global hooks used across the entire application
├── layouts # layout only component
├── lib  re-exporting different libraries preconfigured for the application
│   └── axios.ts
├── locales
│   ├── en.ts
│   └── id.ts
├── pages
├── public
├── services  # All REST API endpoint
│   ├── login.ts
│   └── users.ts
├── store  # Global state
├── styles # Global CSS
├── types  # Shared types
└── utils  # Shared utility functions

```

## Quick Start

### 1. Clone repo

clone repo without commit history

```bash
git clone --depth=1 git@gitlab.badr.co.id:badr-interactive/starterkit-react-typescript.git my-project-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Change color to match your brand color in tailwind.config.ts

```javascript

export default {
  ...  
  theme: {
    extend: {
      // adjust color to match brand color here
      colors: {
        primary: colors.sky,
        secondary: colors.orange,
        success: colors.emerald,
        danger: colors.red,
        info: colors.blue,
        warning: colors.yellow,
        gray: colors.gray, // choose your shade of grey (slate, gray, zinc, neutral, stone)
      },
      ...
    },
  },
  ...
} 
```

## Available scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm start` — Starts the application in production mode.
- `npm run lint` — Check code using ESLint.
- `npm run lint:fix` — Fix autofixable ESLint problem.
- `npm run format:all` — Format code using Prettier for all files.
- `npm run format:dirty` — Format code using Prettier for changed files only.
- `npm run format:check` — Check code format using prettier.

## Path Mapping

To import components or files, use the `@` prefix.

```jsx
// example
import { Button } from '@/components/Button'

// To import images or other files from the public folder
import avatar from '@/public/avatar.png'
```

## References

- [Tanstack Query tutorial](https://www.youtube.com/watch?v=r8Dg0KVnfMA)
- [React Query: It’s Time to Break up with your "Global State”! –Tanner Linsley](https://www.youtube.com/watch?v=seU46c6Jz7E)
- [Headless components in React and why I stopped using a UI library for our design system](https://medium.com/@nirbenyair/headless-components-in-react-and-why-i-stopped-using-ui-libraries-a8208197c268)
