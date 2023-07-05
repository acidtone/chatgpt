import { openai } from "./app.js";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-Jamquc2KjDZZ7AwuUWiGsWgX",
      model: "davinci",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();
