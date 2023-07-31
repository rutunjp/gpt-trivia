import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config({
  path: './.env.local',
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
async function run({ topic, difficulty, instructions, setQuestions }) {
  console.log('IN Utils')
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `You are a quiz setter. Prepare array of 10 questions for a quiz on topic: ${topic} with difficulty level: ${difficulty}.${instructions}. provide one correct answer and 3 incorrect answers for each question with json shape : [{
      "questionNumber: "question Number ",
  "question": "Who is Luke Skywalker's father?",
  "answer": "Darth Vader",
  "wrongAnswers": ["Obi-Wan Kenobi", "Emperor Palpatine", "Yoda"]
}] `,
    max_tokens: 2000,
    temperature: 0,
  })
  console.log(completion.data.choices[0].text.trim())
  const questions = completion.data.choices[0].text.trim()
  setQuestions(questions)
  // fs.writeFile('utils/questions.json', questions, (err) => {
  //   if (err) {
  //     console.error('Error writing questions to file:', err)
  //   } else {
  //     console.log('Questions saved to utils/questions.json')
  //   }
  // })
}
export default run
