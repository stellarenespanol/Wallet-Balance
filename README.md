# Wallet Balance - Stellar en Español

Esta es una aplicación web desarrollada con [Next.js](https://nextjs.org/) que permite consultar de forma rápida y sencilla el saldo de una cuenta en la red Stellar. El usuario puede conectar su wallet y visualizar al instante cuántos XLM tiene disponibles en su cuenta.

## Características principales
- Conexión sencilla a wallets compatibles con Stellar (por ejemplo, Freighter).
- Consulta instantánea del saldo de la cuenta Stellar conectada.
- Interfaz moderna, responsiva y en español.
- Uso de [@creit.tech/stellar-wallets-kit](https://www.npmjs.com/package/@creit.tech/stellar-wallets-kit) para la integración con wallets.

## Estructura del proyecto
- **src/app/page.tsx**: Página principal, muestra la interfaz y conecta los componentes clave.
- **src/app/components/WalletButton.tsx**: Componente para conectar/desconectar la wallet de Stellar.
- **src/app/components/Balance.tsx**: Componente que muestra el saldo de XLM de la cuenta conectada.
- **src/app/utils/balance.ts**: Lógica para consultar el saldo en la blockchain de Stellar.

## Instalación y ejecución

1. **Clona el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd wallet-balance
   ```
2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```
3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. **Abre la aplicación en tu navegador**
   Ve a [http://localhost:3000](http://localhost:3000)

## Uso
1. Haz clic en el botón para conectar tu wallet de Stellar.
2. Autoriza la conexión desde tu wallet (por ejemplo, Freighter).
3. Una vez conectada, verás el saldo de tu cuenta en XLM.

## Tecnologías utilizadas
- [Next.js](https://nextjs.org/) 15.3.1
- [React](https://react.dev/) 19
- [@creit.tech/stellar-wallets-kit](https://www.npmjs.com/package/@creit.tech/stellar-wallets-kit)
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

## Scripts disponibles
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera la versión de producción.
- `npm run start`: Inicia la aplicación en modo producción.
- `npm run lint`: Ejecuta el linter para mantener la calidad del código.

## Personalización
Puedes modificar los estilos en `src/app/globals.css` y los componentes en la carpeta `src/app/components` para adaptar la aplicación a tus necesidades.

## Licencia
Este proyecto es de código abierto y puedes adaptarlo libremente.
