import { Box, Typography, Skeleton } from '@mui/material'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import ChatInput from '../ChatInput'
import { ConversationType, Message } from '../../type'

interface ChatContentProps {
  conversation: ConversationType | null
  loading: boolean
  userId: number
  handleSendMessage: (messageText: string) => void
  messages: Message[]
  isLoading: boolean
  isAppraisal?: boolean
}

const ChatContent = ({
  conversation,
  loading,
  userId,
  handleSendMessage,
  messages,
  isLoading,
  isAppraisal = false
}: ChatContentProps) => {
  return (
    <Box
      sx={{
        minWidth: 'calc(100vw - 50vw)'
      }}
      component={'div'}
    >
      {loading ? (
        <Box>
          <Box sx={{ padding: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={80} />
          </Box>

          <Box sx={{ padding: 2 }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 2 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box sx={{ ml: 2, flex: 1 }}>
                  <Skeleton width="60%" />
                  <Skeleton width="80%" />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Skeleton for ChatInput */}
          <Box sx={{ padding: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Box>
        </Box>
      ) : conversation ? (
        <Box
          component={'div'}
          height={'full'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 24vh)'
          }}
        >
          <ChatHeader
            conversation={conversation}
            loading={loading}
            isAppraisal={isAppraisal}
          />
          <ChatMessages
            currentUserId={userId}
            messages={messages}
            loading={isLoading}
          />
          <ChatInput handleSendMessage={handleSendMessage} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 200px)',
            textAlign: 'center'
          }}
          component={'div'}
        >
          <Typography variant="h6" color="textSecondary">
            No conversation selected
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ChatContent
