import {
  Flex,
  Image,
  Box,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

export default function ChatForm({ handleCloseBubble }) {
  // vi du messages nhu nay
  const mess = [
    {
      id: 1,
      text: "can you ask me anything?",
      isBot: true,
    },
    {
      id: 2,
      text: "How can I help you today?",
      isBot: false,
    },
  ];

  const [messages, setMessages] = useState(mess);

  const handleSendMessage = async () => {
    const response = await fetch("https://api.somewebsite.com/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "hello" }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Box bg="white" rounded="xl" padding="10px">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg"
            alt="chat bot"
          />

          <h3>Chatbot</h3>
        </Flex>
        <CloseChatBot handleCloseBubble={handleCloseBubble} />
      </Flex>

      <Box>
        {messages.map((message) => (
          <Box
            key={message.id}
            padding="10px"
            bg={message.isBot ? "gray.100" : "blue.100"}
            borderRadius="10px"
            margin="10px 0px"
          >
            {message.text}
          </Box>
        ))}
      </Box>

      <FormControl onSubmit={handleSendMessage}>
        <Flex alignItems="center">
          <Input type="email" />
          <Button colorScheme="blue" size="sm" margin="0px 0px 0px 5px">
            Send
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}

const CloseChatBot = ({ handleCloseBubble }) => (
  <Image
    onClick={handleCloseBubble}
    borderRadius="full"
    boxSize="25px"
    src="./closeBtn.svg"
    alt="chat bot"
  />
);
