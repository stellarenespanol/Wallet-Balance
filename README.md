# Wallet Balance

La aplicación Stellar Balance Checker es una herramienta sencilla diseñada para consultar el saldo de tu cuenta en la red Stellar de forma rápida y visual.

## Requisitos Previos

La aplicación depende de las siguientes dependencias:

- Node (>=16.14.0 <=18.0.0): https://nodejs.org/en/download/
- Yarn (v1.22.5 o más reciente): https://classic.yarnpkg.com/en/docs/install
- Una wallet compatible con Stellar (Freighter, Albedo o XBull): https://www.freighter.app/

## Características

Stellar Balance Checker ofrece las siguientes características:

1. **Integración con múltiples wallets**: La aplicación se integra perfectamente con Freighter, Albedo y XBull, permitiendo a los usuarios conectar su wallet preferida para consultar su saldo.

2. **Visualización de saldo en tiempo real**: Una vez conectada la wallet, la aplicación muestra el saldo actual de XLM en la cuenta del usuario con una interfaz visual atractiva.

3. **Interfaz de usuario intuitiva**: Diseño limpio y moderno que facilita la consulta de saldos con una experiencia de usuario optimizada.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio del proyecto
cd stellar-balance-checker

# Instalar dependencias
yarn install

# Iniciar la aplicación en modo desarrollo
yarn start
```

La aplicación estará disponible en `http://localhost:9000`.

## Uso

1. Abre la aplicación en tu navegador
2. Haz clic en "Conectar Wallet"
3. Selecciona tu wallet preferida (Freighter, Albedo o XBull)
4. Autoriza la conexión
5. ¡Listo! Ahora puedes ver tu saldo de XLM en la interfaz

## Tecnologías Utilizadas

- React
- TypeScript
- Stellar SDK
- Stellar Wallets Kit
- Stellar Design System

## Licencia

Apache-2.0
