import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'


// dotenv.config({
//   path: './.env.local',
// })

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)
// async function run() {
//   const response = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: `Hii in chinese`,
//     max_tokens: 2000,
//     temperature: 0,
//   })
//   console.log(response.data.choices[0].text)
// }
// export default run
