import { ner } from "../config/ner"
import { OpenAI } from "../models/openai"
import { Prompter } from "../promptify"

const model = OpenAI('api_key')

const prompt = ner({
    text_input : '',
    description : '',
    domain : '',
    labels : '',
    examples : []
})

const result = Prompter(model, prompt)
