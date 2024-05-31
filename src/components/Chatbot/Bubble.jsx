import { Image, Box } from "@chakra-ui/react";

export default function Bubble({ handleBubble }) {
  return (
    <Box onClick={handleBubble} float="right">
      <Image
        borderRadius="full"
        boxSize="50px"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg"
        alt="chat bot"
      />
    </Box>
  );
}
