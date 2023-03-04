export const Prompter = async (
    model,
    prompt,
    modelType = "text-davinci-003"
) => {
    const supportedModels = [
        "text-davinci-003",
        "text-curie-001",
        "text-babbage-001",
        "text-ada-001",
        // "gpt-3.5-turbo", requires another implementation, can't be used like the other text completion models
    ];

    if (!supportedModels.includes(modelType))
        throw new Error("Model not supported");
    if (!model) throw new Error("model is required"); //logic for incorrect model

    if (!prompt) throw new Error("incorrect prompt");

    //call API to render the prompt ?

    const completion = await model.createCompletion({
        model: modelType,
        prompt: prompt,
    });

    return completion.data;
};
