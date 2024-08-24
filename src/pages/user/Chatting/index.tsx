import { Container } from '@mui/material'
import ChattingSideBar from './components/SideBar'
import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { ConversationType, Message, MessageResponse } from './type'
import useSWR from 'swr'
import { AppPath } from '@/services/utils'
import useDebounce from '@/hooks/useDebounce'
import ChatContent from './components/ChatContent'
import SockJS from 'sockjs-client/dist/sockjs.js'
import { CompatClient, Stomp } from '@stomp/stompjs'

const ChattingPage = () => {
  const clientRef = useRef<CompatClient | null>(null)
  const reconnectAttemptsRef = useRef<number>(0)
  const maxReconnectAttempts = 5
  const reconnectDelay = useRef(5000) // 5 seconds delay between reconnection attempts

  const user = useMemo(() => {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null
  }, [])

  const token = useMemo(() => localStorage.getItem('token'), [])
  const [filteredConversations, setFilteredConversations] = useState<
    ConversationType[]
  >([])
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationType | null>(null)
  const [search, setSearch] = useState<string>('')

  useDebounce(search, 150)

  const { isLoading } = useSWR(AppPath.GET_CONVERSATION(user?.id), {
    onSuccess: (data) => {
      setFilteredConversations(data)
      setSelectedConversation(data[0])
    }
  })

  const { isLoading: loadingMessage } = useSWR(
    selectedConversation &&
      AppPath.GET_MESSAGES(selectedConversation?.conversationId),
    {
      onSuccess: (data) => {
        setMessages(data)
      }
    }
  )

  // Move handleReconnect above connectSocket
  const handleReconnect = useCallback(() => {
    if (reconnectAttemptsRef.current < maxReconnectAttempts) {
      setTimeout(() => {
        reconnectAttemptsRef.current += 1
        console.log(
          `Attempting to reconnect... (${reconnectAttemptsRef.current})`
        )
        connectSocket() // Try to reconnect
      }, reconnectDelay.current)
      reconnectDelay.current *= 2 // Exponential backoff
    } else {
      console.error(
        'Max reconnect attempts reached. Could not reconnect to WebSocket.'
      )
    }
  }, [])

  const connectSocket = useCallback(() => {
    if (user && token) {
      const sock = new SockJS(`https://timepiece.onrender.com/ws`)
      const client = Stomp.over(sock)
      clientRef.current = client

      client.connect(
        {
          Authorization: `Bearer ${token}`
        },
        () => {
          reconnectAttemptsRef.current = 0 // Reset reconnect attempts on successful connection
          if (selectedConversation) {
            client.subscribe(
              `/topic/conversation/${selectedConversation.conversationId}`,
              (message) => {
                const data: MessageResponse = JSON.parse(message.body)

                if (data.senderId !== user.id) {
                  setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                      senderId: data.senderId,
                      senderName: data.senderName,
                      messageText: data.content,
                      sentAt: data.sentAt,
                      status: 'received',
                      timestamp: data.sentAt
                    }
                  ])
                }
              }
            )
          }
        },
        (error) => {
          console.error('WebSocket connection error:', error)
          handleReconnect() // Attempt to reconnect on error
        }
      )
    }
  }, [selectedConversation, token, user, handleReconnect])

  useEffect(() => {
    connectSocket()

    return () => {
      if (clientRef.current && clientRef.current.connected) {
        clientRef.current.disconnect(() => {
          console.log('Disconnected from WebSocket')
        })
      }
    }
  }, [connectSocket])

  const handleSelectConversation = useCallback(
    (conversation: ConversationType) => {
      setSelectedConversation(conversation)
    },
    []
  )

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const handleSendMessage = useCallback(
    (messageText: string) => {
      if (!messageText.trim() || !selectedConversation || !clientRef.current) {
        return
      }

      const newMessage: Message = {
        senderId: user.id,
        senderName: selectedConversation.senderName ?? 'Anonymous',
        senderAvatar: selectedConversation.senderAvatar,
        messageText,
        sentAt: new Date().toISOString(),
        timestamp: new Date().toISOString()
      }

      // Send the message via WebSocket
      clientRef.current.send(
        `/app/chat.sendMessage/${selectedConversation.conversationId}`,
        {},
        JSON.stringify({
          ...newMessage,
          content: newMessage.messageText
        })
      )
      console.log('Sent message:', newMessage)
      // Update the UI with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage])
    },
    [selectedConversation]
  )
  console.log(selectedConversation)
  return (
    <Container
      disableGutters
      component={'div'}
      sx={{
        marginTop: 12,
        marginBottom: 4,
        minHeight: 'calc(100vh - 30vh)',
        maxHeight: 'calc(100vh - 26vh)',
        display: 'flex',
        direction: 'row',
        justifyContent: 'center'
      }}
    >
      <ChattingSideBar
        item={filteredConversations}
        handleSearch={handleSearch}
        search={search}
        loading={isLoading}
        active={selectedConversation?.conversationId}
        onClick={handleSelectConversation}
      />
      <ChatContent
        conversation={selectedConversation}
        loading={isLoading}
        userId={user?.id}
        handleSendMessage={handleSendMessage}
        messages={messages}
        isLoading={loadingMessage}
      />
    </Container>
  )
}

export default ChattingPage
