import { Prompter } from "../promptify/index.js";

const prompt = [
    { role: "system", content: "you are an helpful assistat" },
    { role: "user", content: "hey what is your purpose?" },
];

const apiKey = "api-key";

const result = await Prompter(undefined, prompt, "gpt-3.5-turbo", apiKey);

console.log(result);
