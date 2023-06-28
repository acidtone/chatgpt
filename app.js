import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';
import { config } from 'dotenv';
config();

const configuration = new Configuration({
    // organization: "org-GtBFKyLXxx4p9EKZOoapne7z",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
userInterface.prompt();

userInterface.on("line", async (input) => {
  const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
  });
  // Log only useful information
  console.log(res.data.choices[0].message.content);
});