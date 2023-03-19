import { sql } from "../dist/config/sql.js";
import { OpenAI } from "../dist/models/openai.js";
import { Prompter } from "../dist/promptify/index.js";
import { sqlData } from "../examples/data/sql.js";

const model = OpenAI("");
const examples = sqlData;
const firstFiveExamples = examples.slice(0, 5);
const exampleSchema = {
    customers: {
        customer_id: Number,
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        address: String,
    },
    orders: {
        order_id: Number,
        customer_id: Number,
        order_date: String,
        product_name: String,
        price: Number,
        quantity: Number,
    },
};

const targetSchema = {
    cars: {
        car_id: Number,
        car_name: String,
        car_price: Number,
        car_color: String,
        car_model: String,
        car_year: Number,
    },
};

const prompt = sql({
    text_input:
        "Write an SQL query to get car names and prices from the cars table where the car color is red and the car price is greater than 10000.",
    description: "SQL Writer",
    example_schema: exampleSchema,
    target_schema: targetSchema,
    examples: firstFiveExamples,
});

const result = await Prompter(model, prompt, "text-davinci-003");

console.log(result);
