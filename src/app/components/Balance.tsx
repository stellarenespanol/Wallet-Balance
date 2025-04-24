// Componente Balance: muestra el saldo de XLM de la cuenta conectada
// "use client" indica que este componente se ejecuta del lado del cliente en Next.js
'use client'
// Importamos React y useEffect para manejar el ciclo de vida del componente
import React, { useEffect } from "react";
// Importamos la función GetBalance que consulta el saldo en la blockchain
import GetBalance from "../utils/balance";

// Definición de las propiedades (props) que recibe el componente Balance
// Estas props permiten saber si la wallet está conectada y cuál es la dirección de la cuenta
interface BalanceProps {
  isConnected: boolean; // Indica si la wallet está conectada
  address: string | null; // Dirección de la cuenta Stellar
}

// Componente funcional que recibe las props definidas arriba
const Balance: React.FC<BalanceProps> =  ({ isConnected, address }) => {
  // Estado local para guardar el saldo obtenido de la cuenta
  // useState inicializa el saldo en 0
  const [balance, setBalance] = React.useState(0);
 
  // useEffect se ejecuta cada vez que cambian isConnected o address
  // Sirve para actualizar el saldo cuando la wallet se conecta o cambia de cuenta
  useEffect(() => {
    // Mensaje en consola para depuración (puedes eliminarlo si no lo necesitas)
    console.log('aquuuuu',isConnected, address);
    // Si la wallet está conectada y hay dirección, consulta el saldo
    if (isConnected && address) {
      // Llama a la función GetBalance y actualiza el estado con el resultado
      GetBalance(address).then((result) => {
        setBalance(result); // Actualiza el saldo en el estado
      });
     
    }
  }, [isConnected, address]); // Dependencias: se ejecuta cuando cambian estos valores
  
  // Si no está conectada la wallet o no hay dirección, no muestra nada
  if (!isConnected || !address) {
    return null; // No renderiza nada
  }

  // Renderiza el saldo en pantalla si la wallet está conectada
  return (
    <div className="mt-4 text-white text-lg font-semibold">
      {/* Muestra el saldo en XLM */}
      Su saldo en XLM es: {balance}
    </div>
  );
};

// Exporta el componente para que pueda ser usado en otras partes de la app
export default Balance;