import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)
const response = await openai.createCompletion({
  model: 'gpt-3.5-turbo',
  prompt: 'Say this is a test',
  max_tokens: 3,
  temperature: 0,
})
console.log(response.data.choices)
