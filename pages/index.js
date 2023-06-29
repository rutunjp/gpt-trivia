import {
  Heading,
  Button,
  VStack,
  HStack,
  Input,
  Select,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <VStack maxW={'30%'} m={'auto'}>
      <Heading as={'h1'} mb={'8'} fontSize={'5xl'}>
        GPT-Trivia
      </Heading>

      <Input placeholder="Enter topic..." type="text" />
      <p>Popular topics</p>
      <HStack>
        <Button variant={'outline'}>History</Button>
        <Button variant={'outline'}>Cooking</Button>
        <Button variant={'outline'}>Tech</Button>
      </HStack>
      <Select placeholder="Select difficulty">
        <option value="easy">Easy</option>
        <option value="itermediate">Intermediate</option>
        <option value="difficult">Difficult</option>
        <option value="expert">Expert</option>
        <option value="random">Random</option>
      </Select>
      <Input placeholder="Instructions" />
      <Button
        colorScheme="blue"
        onClick={(e) => {
          e.preventDefault()
          console.log('fires')
        }}
      >
        Create Quiz
      </Button>
    </VStack>
  )
}
