https://anas-khaiy.web.app/


<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 41 03 PM" src="https://github.com/user-attachments/assets/a0eeb17c-76eb-460f-a797-9128ccc49b18" />


<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 41 14 PM" src="https://github.com/user-attachments/assets/884a24c5-f7b7-41ec-8022-fe103b3c8fd9" />



<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 41 27 PM" src="https://github.com/user-attachments/assets/844a92f5-3916-48a5-a6d7-99ac5d6f9fe0" />



<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 41 42 PM" src="https://github.com/user-attachments/assets/fd6837bc-90db-4754-ac32-59d79c331d53" />




<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 41 51 PM" src="https://github.com/user-attachments/assets/526d67b9-899e-4243-af3c-8225e55bdf12" />

<img width="1710" height="881" alt="Screenshot 2025-11-18 at 1 42 02 PM" src="https://github.com/user-attachments/assets/1dc1fc1a-4f28-4a31-8f8f-2b7b4a4e7b51" />



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
