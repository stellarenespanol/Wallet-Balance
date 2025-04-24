// Función asíncrona que obtiene el saldo de XLM de una cuenta Stellar
// Esta función es fundamental para consultar el saldo de una cuenta en la blockchain de Stellar.
// Recibe como parámetro la dirección de la cuenta y devuelve el saldo en XLM.
// Si la dirección es inválida o no se encuentra saldo, retorna 0.
//
// Parámetros:
//   address (string): Dirección pública de la cuenta Stellar a consultar.
//
// Retorna:
//   Promise<number>: Saldo de la cuenta en XLM (puede ser 0 si no hay fondos o la cuenta no existe).
async function GetBalance(address: string) {
    // Verifica que la dirección no sea nula o vacía
    if (address) {
        // Realiza una petición HTTP a la API de Stellar para obtener los datos de la cuenta
        const response = await fetch(`https://horizon-testnet.stellar.org/accounts/${address}`);
       
        // Si la respuesta es exitosa (status 200)
        if (response.ok) {
            // Convierte la respuesta a formato JSON
            const data = await response.json();
            // Busca el objeto que representa el saldo nativo (XLM) dentro del array de balances
            const xlmBalance = data.balances.find((b: any) => b.asset_type === "native");
            // Retorna el saldo si es mayor a 0, si no, retorna 0
            return xlmBalance.balance > 0 ? xlmBalance.balance : 0;
        }
    }
    // Si la dirección es inválida o la petición falla, retorna 0
    return 0;
}
// Exporta la función para que pueda ser utilizada en otros archivos
export default GetBalance;