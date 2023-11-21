
// retuns an array of chatHistory

const GetChatHistory = ()  => {
    return [
        { role: 'user', message: "Hola, Como estas?" },
        { role: 'assistant', message: "Hola! Estoy muy bien, estoy para lo que necesites" },
    ];
}

module.exports = {GetChatHistory}