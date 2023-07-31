import {
  Heading,
  Button,
  VStack,
  HStack,
  Input,
  Select,
} from '@chakra-ui/react'
import run from '@/utils/generate-questions.mjs'
import axios from 'axios'
import { useState } from 'react'
import RetroButton from '@/components/RetroButton'
import Question from '@/components/Question'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [instructions, setInstructions] = useState('')

  const handleCreateQuiz = () => {
    axios
      .post(`http://localhost:8000/createQuiz/`, {
        topic: topic,
        difficulty: difficulty,
      })
      .then(function (response) {
        console.log('Response from the server:', response)
      })
      .catch(function (error) {
        console.log('Error creating quiz:', error.message)
        if (error.response) {
          console.error('Status Code:', error.response.status)
          console.error('Response Data:', error.response.data)
        }
      })
  }

  return (
    <VStack maxW={'30%'} m={'auto'}>
      <Heading as={'h1'} mb={'8'} fontSize={'5xl'}>
        GPT-Trivia
      </Heading>

      <Input
        placeholder="Enter topic..."
        type="text"
        onChange={(e) => {
          setTopic(e.target.value)
        }}
      />
      <p>Popular topics</p>
      <HStack>
        <Button variant={'outline'}>History</Button>
        <Button variant={'outline'}>Cooking</Button>
        <Button variant={'outline'}>Tech</Button>
      </HStack>
      <Select
        placeholder="Select difficulty"
        onChange={(e) => {
          setDifficulty(e.target.value)
          window.alert(`{(${topic}, ${difficulty}, ${instructions})}`)
        }}
      >
        <option value="easy">Easy</option>
        <option value="itermediate">Intermediate</option>
        <option value="difficult">Difficult</option>
        <option value="expert">Expert</option>
        <option value="random">Random</option>
      </Select>
      <Input
        placeholder="Instructions"
        onChange={(e) => {
          setInstructions(e.target.value)
        }}
      />
      <Button
        colorScheme="blue"
        onClick={(e) => {
          e.preventDefault()
          handleCreateQuiz()
        }}
      >
        Create Quiz
      </Button>
      <Button
        colorScheme="red"
        onClick={(e) => {
          e.preventDefault()
          fetchPrevQuiz()
        }}
      >
        Fetch Prev Quiz
      </Button>
    </VStack>
  )
}
