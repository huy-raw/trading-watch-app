export interface ConversationType {
  conversationId: number
  watchId: number
  watchName: string
  watchImage: string
  address: string
  senderId: number
  senderName: string
  senderAvatar: string
  recipientId: number
  recipientName: string
  recipientAvatar: string
  roleRecipient: 'User' | 'Appraiser'
  watchPrice: number
}

export interface Message {
  id?: number
  messageText: string
  senderAvatar?: string
  senderId: number
  senderName: string
  sentAt: string
  status?: string
  timestamp: string
}

export interface MessageResponse {
  id: number
  content: string
  conversationId: number | null
  recipientId: number | null
  recipientName: string | null
  senderId: number
  senderName: string
  sentAt: string
  status?: string
}
