import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'
dotenv.config({
  path: './.env.local',
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
async function run() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt:
      'prepare 10 questions for a quiz on topic: "Indian ancient sports" with difficulty level: "medium" . provide one correct answer and 3 incorrect answers for each question with shape :{"question":{"Question about the topic"},"incorrectAnswers": {["incorrectAnswer1","incorrectAnswer2","incorrectAnswer3"]},"correctAnswer": {"correctAnswer"}}',
    max_tokens: 2000,
    temperature: 0,
  })
  console.log(response.data.choices[0].text)
}
run()
