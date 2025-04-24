// Componente WalletButton: permite conectar y desconectar una wallet de Stellar
// "use client" indica que este componente se ejecuta del lado del cliente en Next.js
'use client'
import React from "react";
import {
    StellarWalletsKit,
    WalletNetwork,
    allowAllModules,
    FREIGHTER_ID,
    ISupportedWallet
} from '@creit.tech/stellar-wallets-kit';

/**
 * Props que recibe el componente WalletButton
 * @property {boolean} isConnected - Indica si la wallet está conectada
 * @property {string | null} address - Dirección de la cuenta Stellar
 * @property {function} setIsConnected - Función para actualizar el estado de conexión
 * @property {function} setAddress - Función para actualizar la dirección
 */
interface WalletButtonProps {
    isConnected: boolean; // Indica si la wallet está conectada
    address: string | null; // Dirección de la cuenta Stellar
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>; // Función para actualizar el estado de conexión
    setAddress: React.Dispatch<React.SetStateAction<string | null>>; // Función para actualizar la dirección
}

/**
 * Componente funcional que maneja la conexión y desconexión de la wallet de Stellar.
 * Permite al usuario conectar su wallet, ver la dirección y desconectarla.
 * Utiliza el kit de wallets de Stellar para facilitar la integración.
 */
const WalletButton: React.FC<WalletButtonProps> = ({ isConnected, address, setIsConnected, setAddress }) => {
    // Inicializa el kit de wallets de Stellar para la red de prueba (TESTNET)
    const kit: StellarWalletsKit = new StellarWalletsKit({
        network: WalletNetwork.TESTNET,
        selectedWalletId: FREIGHTER_ID,
        modules: allowAllModules(),
    });

    /**
     * Función para conectar la wallet
     * Abre un modal para seleccionar la wallet y obtiene la dirección de la cuenta
     */
    const handleConnect = async () => {
        // Abre el modal para seleccionar la wallet
        await kit.openModal({
            onWalletSelected: async (option: ISupportedWallet) => {
                kit.setWallet(option.id); // Selecciona la wallet elegida
                const { address } = await kit.getAddress(); // Obtiene la dirección de la cuenta
                if (address) {
                    setAddress(address); // Actualiza la dirección en el estado
                    setIsConnected(true); // Marca como conectada
                }
            }
        });
    };

    /**
     * Función para desconectar la wallet
     * Limpia el estado de conexión y la dirección
     */
    const handleDisconnect = () => {
        setIsConnected(false); // Marca como desconectada
        setAddress(null); // Limpia la dirección
    };

    // Renderiza el botón correspondiente según el estado de conexión
    return (
        <div className="mt-6 flex flex-col items-center">
            {isConnected ? (
                <>
                    {/* Muestra la dirección conectada y botón para desconectar */}
                    <p className="text-white mb-2">Conectado como:</p>
                    <p className="text-white font-mono mb-4">{address}</p>
                    <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleDisconnect}
                    >
                        Desconectar Wallet
                    </button>
                </>
            ) : (
                // Botón para conectar la wallet
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    onClick={handleConnect}
                >
                    Conectar Wallet
                </button>
            )}
        </div>
    );
};

// Exporta el componente para que pueda ser usado en otras partes de la app
export default WalletButton;