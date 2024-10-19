# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Usaremos tailwind
```
npm install -D tailwindcss postcss autoprefixer
```

## Genera un archivo de configuración para Tailwind ejecutando:
```
npx tailwindcss init -p
```

## Configura el Archivo CSS
### Crea un archivo CSS para Tailwind en la carpeta src (por ejemplo, src/index.css) y agrega las directivas de Tailwind:
```
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Configura el archivo tailwind.config.js (Opcional)
### Puedes personalizar tu configuración de Tailwind en tailwind.config.js. Aquí puedes definir temas, extensiones de color, breakpoints, etc.

### PurgeCSS: Para optimizar tu CSS eliminando las clases no utilizadas en producción, configura el atributo purge en tu archivo tailwind.config.js para escanear tus archivos:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Para la autenticacion usaremos reactfire de firebase

## 1. Instalación
Primero, necesitas instalar reactfire junto con los paquetes de Firebase que utilizarás en tu proyecto. Puedes hacerlo ejecutando el siguiente comando:

```
npm install reactfire firebase
```

## 2. Configurar Firebase en tu proyecto
Debes configurar Firebase para que tu aplicación pueda interactuar con él. Crea un archivo firebase-config.ts y coloca tu configuración de Firebase allí:

```
// firebase-config.ts
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

export const firebaseApp = initializeApp(firebaseConfig);
```

## 3. Proveer Firebase a tu aplicación
Usa el componente FirebaseAppProvider de reactfire para proveer la instancia de Firebase a tu aplicación React. Envuelve tu aplicación en este componente dentro del archivo index.tsx o el punto de entrada principal de tu aplicación:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseApp } from './firebase-config';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FirebaseAppProvider firebaseApp={firebaseApp}>
    <App />
  </FirebaseAppProvider>
);
```

## 4. Usar hooks de ReactFire
ReactFire proporciona varios hooks para interactuar con diferentes servicios de Firebase, como Firestore, Auth, y Realtime Database. Aquí hay algunos ejemplos de cómo usar estos hooks:

Autenticación con Firebase
Para utilizar la autenticación, puedes usar el hook useUser para obtener información del usuario autenticado y useSigninWithEmailAndPassword para manejar el inicio de sesión:
```
import { useAuth, useSigninWithEmailAndPassword, useUser } from 'reactfire';
import { getAuth } from 'firebase/auth';

function Login() {
  const auth = getAuth();
  const { data: user } = useUser();
  const { signInWithEmailAndPassword } = useSigninWithEmailAndPassword(auth);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword('email@example.com', 'password123');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      {user ? <p>Welcome, {user.displayName || user.email}</p> : <button onClick={handleLogin}>Login</button>}
    </div>
  );
}
```

# Para las rutas react-router-dom

```
npm install react-router-dom
```

## Creamos un archivo route de la siguiente manera
```
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          },
          {
            path: "/dashboard/:id",
            element: <DashboardId />
          },
          {
            path: 'settings',
            element: <div className="ml-64">Settings</div>
          }
        ]
      }
    ]
  },
])
```

### Este archivo lo usamos en el componente principal encerrando la app a la que queremos hacer las rutas
  ejemplo:
```
function App() {
  const app = useFirebaseApp();
  const auth = getAuth(app); //verifica si hay una seccion activa

  return (
    <AuthProvider sdk={auth}>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}
```