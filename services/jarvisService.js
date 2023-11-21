const { GetChatHistory } = require('./chatHistory')
const { GetResponse, BuildUserRoleMessageNode } = require('./openaiService')

const CONTEXT = 'Sos un asistente de mercados de criptomonedas. Se amable.'

// create jarvis context with crypto data
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

const Reply = async (contentMessage) => {

    // jarvis context 
    const jarvisContext = provideJarvisContext()

    // chats history
    const chatHistory = GetChatHistory();
    const messageUserRole = BuildUserRoleMessageNode(contentMessage);
    const chats = [...chatHistory, messageUserRole]

    console.log(chats);

    return await GetResponse(jarvisContext, chats);
}

module.exports = {Reply};

