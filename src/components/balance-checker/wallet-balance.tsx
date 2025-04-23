import React, { useEffect, useState } from "react";
import { Card, Heading, Loader } from "@stellar/design-system";
import "./index.scss";

/**
 * Props para el componente WalletBalance
 * @property {string | null} activeAccount - Dirección pública de la cuenta activa
 */
interface WalletBalanceProps {
  activeAccount: string | null;
}

/**
 * Componente que muestra el saldo de XLM de una cuenta Stellar
 * Realiza una consulta a la API de Horizon para obtener el saldo
 * 
 * @param {WalletBalanceProps} props - Propiedades del componente
 * @returns {JSX.Element | null} - Elemento JSX renderizado o null si no hay cuenta activa
 */
export const WalletBalance = ({ activeAccount }: WalletBalanceProps) => {
  // Estado para almacenar el saldo de XLM
  const [balance, setBalance] = useState<string | null>(null);
  // Estado para controlar la carga de datos
  const [isLoading, setIsLoading] = useState(false);
  // Estado para manejar errores
  const [error, setError] = useState<string | null>(null);

  // Efecto para obtener el saldo cuando se conecta una cuenta
  useEffect(() => {
    /**
     * Función asíncrona para obtener el saldo de la cuenta
     * Consulta la API de Horizon Testnet
     * 
     * @returns {Promise<void>} Promesa que se resuelve cuando se completa la consulta del saldo
     */
    const fetchBalance = async () => {
      // Si no hay cuenta activa, no hacemos nada
      if (!activeAccount) return;
      
      // Iniciamos la carga y limpiamos errores previos
      setIsLoading(true);
      setError(null);
      
      try {
        // Realizamos la petición a la API de Horizon
        const response = await fetch(`https://horizon-testnet.stellar.org/accounts/${activeAccount}`);
        
        // Verificamos si la respuesta es correcta
        if (!response.ok) {
          throw new Error(`Error fetching account: ${response.statusText}`);
        }
        
        // Convertimos la respuesta a JSON
        const data = await response.json();
        // Buscamos el saldo de XLM (asset nativo)
        const xlmBalance = data.balances.find((b: any) => b.asset_type === "native");
        // Actualizamos el estado con el saldo
        setBalance(xlmBalance ? xlmBalance.balance : "0");
      } catch (err) {
        // Manejamos los errores
        console.error("Error fetching balance:", err);
        setError("No se pudo obtener el saldo de la cuenta");
      } finally {
        // Finalizamos la carga
        setIsLoading(false);
      }
    };

    // Si hay una cuenta activa, obtenemos su saldo
    if (activeAccount) {
      fetchBalance();
    }
  }, [activeAccount]); // El efecto se ejecuta cuando cambia la cuenta activa

  // Si no hay cuenta activa, no renderizamos nada
  if (!activeAccount) {
    return null;
  }

  /**
   * Función que renderiza el contenido del balance según el estado actual
   * Muestra un loader durante la carga, un mensaje de error si hay error,
   * o el saldo si todo está correcto
   * 
   * @returns {JSX.Element} - Elemento JSX con el contenido apropiado
   */
  function renderBalanceContent() {
    // Si está cargando, mostramos un spinner
    if (isLoading) {
      return (
        <div className="balance-loading">
          <Loader size="sm" />
        </div>
      );
    }
    
    // Si hay un error, mostramos el mensaje de error
    if (error) {
      return <div className="balance-error">{error}</div>;
    }
    
    // Si todo está correcto, mostramos el saldo
    return (
      <div className="balance-container">
        {/* Círculo con el saldo formateado */}
        <div className="balance-circle">
          <div className="balance-amount">{parseFloat(balance || "0").toFixed(2)}</div>
          <div className="balance-symbol">XLM</div>
        </div>
        {/* Detalles adicionales del saldo */}
        <div className="balance-details">
          <div className="balance-label">Saldo disponible</div>
          <div className="balance-value">{balance} XLM</div>
        </div>
      </div>
    );
  }

  // Renderizamos el componente completo
  return (
    <div className="balance-card">
      <Card variant="secondary">
        <Heading as="h2" size="md">
          Tu Saldo en Stellar
        </Heading>
        
        {/* Renderizamos el contenido según el estado actual */}
        {renderBalanceContent()}
      </Card>
    </div>
  );
};
