import axios from "axios";
import { OpenAIApi } from "openai";

const supportedModels = [
    "text-davinci-003",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001",
    "gpt-3.5-turbo", //requires another implementation, can't be used like the other text completion models
] as const;

export type SupportedModels = typeof supportedModels[number];

export type TurboData = {
    id: string;
    object: "chat.completion";
    created: Date;
    model: "gpt-3.5-turbo-0301";
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: {
        message: {
            role: "assistant";
            content: string;
        };
        finish_reason: "stop";
        index: number;
    }[];
};

export const Prompter = async (
    model: OpenAIApi | undefined,
    prompt: string,
    modelType: SupportedModels = "text-davinci-003",
    apiKey: string
) => {
    if (!supportedModels.includes(modelType))
        throw new Error("Model not supported");
    if (!modelType) throw new Error("model is required"); //logic for incorrect model

    if (!prompt) throw new Error("incorrect prompt");

    //call API to render the prompt ?
    if (model && modelType !== "gpt-3.5-turbo") {
        const completion = await model.createCompletion({
            model: modelType,
            prompt: prompt,
            max_tokens: 2000,
        });

        return completion.data;
    } else {
        const completionURL = "https://api.openai.com/v1/chat/completions";

        const response = await axios.post<TurboData>(
            completionURL,
            {
                model: modelType,
                messages: prompt,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        const completion = response.data;

        return completion.choices[0].message;
    }
};
