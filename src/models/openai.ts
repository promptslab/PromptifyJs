// const { Configuration, OpenAI } = require("openai");
import { Configuration, OpenAIApi } from "openai";

export const OpenAI = (key: string) => {
    if (!key) throw new Error("Open AI key is required");

    // Logic to validate `apiKey`

    const config = new Configuration({
        apiKey: key,
    });

    const openai = new OpenAIApi(config);

    return openai;
};
