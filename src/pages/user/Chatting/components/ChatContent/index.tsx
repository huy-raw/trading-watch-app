import { Box } from '@mui/material'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import ChatInput from '../ChatInput'

interface ChatContentProps {
  conversationId: number | null
}

const ChatContent = (props: ChatContentProps) => {
  return (
    <Box>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </Box>
  )
}

export default ChatContent
