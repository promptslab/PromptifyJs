import { qa } from "../config/qa.js";
import { qaData } from "../examples/data/qa.js";
import { OpenAI } from "../models/openai.js";
import { Prompter } from "../promptify/index.js";

const model = OpenAI("api-key");
const firstExample = qaData.slice(0, 3);

console.log(firstExample)

const prompt = qa({
    domain: "nlp",
    examples: firstExample,
    context: 'Prompt engineering is a concept in artificial intelligence, particularly natural language processing (NLP). In prompt engineering, the description of the task is embedded in the input, e.g., as a question instead of it being implicitly given. Prompt engineering typically works by converting one or more tasks to a prompt-based dataset and training a language model with what has been called "prompt-based learning" or just "prompt learning".',
    question: "What is prompt engineering?"
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
