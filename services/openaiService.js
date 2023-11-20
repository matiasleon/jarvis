
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const GetResponse = async (context, messages) => {

    let completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": context}],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

function generateMessagesToSend(messages) {

    const roleSystem = { "role": "user", "content": context}

    messagesToSend = []

    return [ roleSystem, ...messagesToSend]
}


//  Given { sender: 'me', message: "Hello, how are you?" },
// return { "role": "system", "content": context}

