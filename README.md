https://anas-khaiy.web.app/

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 03 49 PM" src="https://github.com/user-attachments/assets/41724fec-4284-4acf-b868-bdd9cd211c8e" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 04 10 PM" src="https://github.com/user-attachments/assets/cfd4419f-36e0-445a-8a9a-4c038cf53b67" />
<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 05 48 PM" src="https://github.com/user-attachments/assets/95434ce0-e799-40da-9373-1d567ea94f3c" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 06 06 PM" src="https://github.com/user-attachments/assets/8d41728a-440e-4cc3-bb96-f548e7b41033" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 06 15 PM" src="https://github.com/user-attachments/assets/6b25654e-f3e8-4952-bd2f-31120484b534" />
<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 06 25 PM" src="https://github.com/user-attachments/assets/1ec6c207-9123-4233-9a00-5e97852b415a" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 07 20 PM" src="https://github.com/user-attachments/assets/be2e88cf-a179-4220-9ded-d7f89ee4da34" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 07 26 PM" src="https://github.com/user-attachments/assets/5b624935-a8b3-43ea-b15d-245ae9afe9b9" />
<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 08 14 PM" src="https://github.com/user-attachments/assets/a28fd1ab-9949-4b64-aaf3-dd847309f7e7" />
<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 08 24 PM" src="https://github.com/user-attachments/assets/60e85730-1ef2-4cd7-93d7-fd7b1e452f99" />


<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 09 26 PM" src="https://github.com/user-attachments/assets/8fb1768f-56d8-40d0-8ff2-5a244e3a9fd9" />

<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 09 35 PM" src="https://github.com/user-attachments/assets/c3e13ab6-1bbe-4677-8483-ecb6154f720a" />
<img width="1710" height="995" alt="Screenshot 2025-11-23 at 12 09 43 PM" src="https://github.com/user-attachments/assets/3b5f9ded-008c-4bb6-9600-df6c6a3087c8" />


<img width="497" height="995" alt="Screenshot 2025-11-23 at 12 10 39 PM" src="https://github.com/user-attachments/assets/55f1cbb4-f9c7-422b-9842-feeeddeb24e4" />

<img width="497" height="995" alt="Screenshot 2025-11-23 at 12 10 46 PM" src="https://github.com/user-attachments/assets/7cd3fa3d-6a16-477a-b10c-7319c990715c" />

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
