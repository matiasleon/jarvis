import { GetResponse } from "./openaiService"


const CONTEXT = 'Sos un asistente de mercados de criptomonedas. Se amable.'

// crypot context added
const provideJarvisContext = () => {

    const cryptoData = getBitcoinCurrentValue()
    const cryptoDataString = JSON.stringify(cryptoData);

    const combinedString = `${CONTEXT}\n\nCrypto Data:\n${cryptoDataString}`;

    return combinedString
}

const getBitcoinCurrentValue = () => {
    const cryptoData = [
        { name: 'BTC', value: 37000000 },
        { name: 'ETH', value: 37000000 },
        { name: 'USDT', value: 1000 },
    ]

    return cryptoData;
}

export const Reply = async (message) => {

    // identify type of rtopic
    // build context 
    // response

    return await GetResponse(provideJarvisContext(), messages);
}
