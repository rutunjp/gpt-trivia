import express from 'express'

import axios from 'axios'
import cors from 'cors'
const port = 8000
import { Configuration, OpenAIApi } from 'openai'
const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
import * as fs from 'fs'
import { type } from 'os'

app.use(express.json())
app.post('/createQuiz', async (req, res) => {
  const topic = req.body.topic
  const difficulty = req.body.difficulty
  console.log(topic, difficulty)
  const quiz = await createQuiz(topic, difficulty)
  console.log(quiz.data.choices)
  const write = JSON.stringify(quiz.data.choices)
  console.log(typeof write)
  fs.writeFile('quiz.txt', write, function (err) {
    if (err) throw err
    console.log('Saved!')
  })
})

const configuration = new Configuration({
  apiKey: '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',
})

const shape = {
  topic: 'topic requested by the user',
  questions: [
    {
      questionNo: 'question number',
      question: 'question',
      correctAnswer: 'Correct Answer',
      incorrectAnswers: [
        'Incorrect Answer 1',
        'Incorrect Answer 2',
        'Incorrect Answer 3',
      ],
    },
  ],
}

const openai = new OpenAIApi(configuration)
const createQuiz = async (topic, difficulty) => {
  const resp = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Create a  quiz for the topic: "${topic}" with difficulty level: "${difficulty}".Make 10 questions  with shape: ${shape}. it should be in a valid json format`,
      },
    ],
  })
  return resp
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
