import { Box, Typography, Skeleton } from '@mui/material'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import ChatInput from '../ChatInput'
import { ConversationType } from '../../type'

interface ChatContentProps {
  conversation: ConversationType | null
  loading: boolean
  userId: number
}

const ChatContent = ({ conversation, loading, userId }: ChatContentProps) => {
  return (
    <Box
      sx={{
        minWidth: 'calc(100vw - 50vw)'
      }}
    >
      {loading ? (
        <Box>
          {/* Skeleton for ChatHeader */}
          <Box sx={{ padding: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={80} />
          </Box>

          {/* Skeleton for ChatMessages */}
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
        <Box>
          <ChatHeader conversation={conversation} loading={loading} />
          <ChatMessages
            conversationId={conversation?.conversationId}
            currentUserId={userId}
          />
          <ChatInput />
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
        >
          <Typography variant="h6" color="textSecondary">
            Không có cuộc trò chuyện nào
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ChatContent