import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Skeleton,
  CircularProgress
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import ChatIcon from '@mui/icons-material/Chat'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { createOrder } from '@/services/orderService'
import { useState } from 'react'
import { toast } from 'react-toastify'
import ConfirmDialog from '@/components/ConfirmDiaglog'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { startConversation } from '@/services/conversationService'
import { WatchStatus } from '@/common/type'

interface ItemDetailUserProps {
  sellerId?: number
  sellerName?: string
  sellerPhone?: string
  sellerAvatar?: string
  loading: boolean
  feedbacks?: number
  rating: number
  hasAppraisalCertificate?: boolean
  watchId?: number
  status?: string
}

const ItemDetailUser = ({
  sellerId,
  sellerName,
  sellerPhone,
  sellerAvatar,
  loading,
  feedbacks,
  rating,
  hasAppraisalCertificate,
  watchId,
  status
}: ItemDetailUserProps) => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingCreateConversation, setLoadingCreateConversation] =
    useState(false)
  const data = useLoaderData()
  const { id } = data as { id: string }

  const handleCreateOrder = async () => {
    const res = await createOrder({ watchId: Number(id), userId: user?.id })
    if (res) {
      setIsLoading(false)
      setIsOpen(false)
      toast.success('Đặt hàng thành công', {
        onClose() {
          navigate('/post/manage-order/buy')
        }
      })
    }
  }

  const handleOpenLogin = () => {
    navigate('/authenticate/login')
  }

  const handleCreateConversation = async () => {
    try {
      const res = await startConversation({
        senderId: user.id as number,
        recipientId: sellerId as number,
        watchId: watchId as number
      })
      if (res) {
        navigate(`/user/conversation?conversationId=${res.conversationId}`)
      }
    } catch (error) {
      console.error(error)
      toast.error('Không thể tạo cuộc trò chuyện')
    }
  }

  const isOnwer = user.id === sellerId
  const isShow = status === WatchStatus.SHOW

  return (
    <Box sx={{ padding: 2 }} component={'div'} id={`${id}`}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {loading ? (
            <Skeleton variant="circular" width={80} height={80} />
          ) : (
            <Avatar
              alt="Seller Avatar Image"
              src={sellerAvatar ?? 'https://via.placeholder.com/100'} // Replace with actual image URL
              sx={{ width: 80, height: 80 }}
            />
          )}
        </Grid>
        <Grid item xs={9}>
          {loading ? (
            <>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </>
          ) : (
            <Box component={'div'} marginLeft={2} marginTop={1}>
              <Typography variant="h6" fontWeight="medium" textAlign={'left'}>
                <Link
                  style={{
                    color: '#0474d0'
                  }}
                  to={`/user/seller/${sellerId}`}
                >
                  {sellerName}
                </Link>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Link
                  to={`/user/seller/${sellerId}/rating`}
                  style={{
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign={'left'}
                    marginRight={2}
                  >
                    <Box component="span" sx={{ color: 'gold' }}>
                      {'★'.repeat(Math.floor(rating)) +
                        '☆'.repeat(5 - Math.floor(rating))}
                    </Box>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign={'left'}
                  >
                    {feedbacks} đánh giá
                  </Typography>
                </Link>
              </Box>
            </Box>
          )}
        </Grid>
        {!isOnwer && (
          <Grid item xs={5}>
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={40} />
            ) : (
              <Button variant="outlined" fullWidth startIcon={<PhoneIcon />}>
                {sellerPhone}
              </Button>
            )}
          </Grid>
        )}
        {!isOnwer && (
          <Grid item xs={7}>
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={40} />
            ) : (
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  textTransform: 'none',
                  fontSize: '14px',
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  },
                  '&:disabled': {
                    bgcolor: 'grey.500',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'grey.500'
                    }
                  }
                }}
                startIcon={
                  loadingCreateConversation ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <ChatIcon />
                  )
                }
                onClick={() => {
                  if (user) {
                    setLoadingCreateConversation(true)
                    handleCreateConversation()
                  } else {
                    handleOpenLogin()
                  }
                }}
                disabled={!user || loadingCreateConversation}
              >
                Chat với người bán
              </Button>
            )}
          </Grid>
        )}
        <Grid item xs={12}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={40} />
          ) : !user ? (
            <Button
              variant="outlined"
              fullWidth
              onClick={handleOpenLogin}
              sx={{
                textTransform: 'none',
                fontSize: '14px',
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              Đăng nhập để đặt hàng
            </Button>
          ) : !isOnwer && isShow ? (
            <>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setIsOpen(true)}
                disabled={isLoading}
                sx={{
                  textTransform: 'none',
                  fontSize: '14px',
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  },
                  '&:disabled': {
                    bgcolor: 'grey.500',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'grey.500'
                    }
                  }
                }}
              >
                Đặt hàng
              </Button>
              <ConfirmDialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                isLoading={isLoading}
                onConfirm={() => {
                  setIsLoading(true)
                  handleCreateOrder()
                }}
                title={'Xác nhận đặt hàng'}
                description={
                  'Bạn có chắc chắn muốn đặt hàng sản phẩm này không?'
                }
              />
            </>
          ) : (
            <Button
              variant="outlined"
              fullWidth
              sx={{
                textTransform: 'none',
                fontSize: '14px',
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              <VisibilityOffIcon sx={{ marginRight: 1 }} />
              Đã bán/ Ẩn tin
            </Button>
          )}
        </Grid>
        {!loading && (
          <Grid item xs={12}>
            {hasAppraisalCertificate ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  zIndex: 1,
                  gap: 1,
                  justifyContent: 'center',
                  bgcolor: '#EEF4FF',
                  paddingY: 1,
                  borderRadius: 2
                }}
              >
                <VerifiedUserOutlinedIcon />
                <Typography>Đã thẩm định</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  zIndex: 1,
                  gap: 1,
                  justifyContent: 'center',
                  bgcolor: '#ffeeee',
                  paddingY: 1,
                  borderRadius: 2
                }}
              >
                <Typography>Chưa thẩm định</Typography>
              </Box>
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default ItemDetailUser
