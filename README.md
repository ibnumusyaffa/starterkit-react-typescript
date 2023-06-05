# React Starter

Preview https://starterkit-react.vercel.app

## What's in the stack ?

- ⚡️ Next.js 13
- ⚛️ React 18
- ✨ TypeScript 5.1
- 💨 [TailwindCSS 3](https://tailwindcss.com)
- 💎 Prebuilt customizable components using TailwindCSS, [Radix UI](https://www.radix-ui.com/),React Aria
- 🚀 [Tanstack Query](https://tanstack.com/query) for async state management (fetching, caching, synchronizing)
- 🐻 [Zustand](https://zustand-demo.pmnd.rs) for state management
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Format your code consistently

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
