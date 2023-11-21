
const openai = require('openai');

openai.apiKey = process.env.OPENAI_API_KEY;

//  Given { sender: 'me', message: "Hello, how are you?" },
// return { "role": "system", "content": context}
const generateContent = (context, messages) => {

    const roleSystem = { "role": "user", "content": context}

    messagesToSend = [messages]

    return [roleSystem, ...messagesToSend]
}

const GetResponse = async (context, messages) => {

    const content = generateContent(context, messages)

    console.log(content)

    let completion = await openai.chat.completions.create({
        messages: content,
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

const BuildUserRoleMessageNode = (message)  => {
    return {"role":"user", "content": message}
} 

module.exports = {BuildUserRoleMessageNode,GetResponse}