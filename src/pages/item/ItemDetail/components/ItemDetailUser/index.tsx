import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Link,
  Skeleton
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import ChatIcon from '@mui/icons-material/Chat'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { createOrder } from '@/services/orderService'
import { useState } from 'react'
import ConfirmDialog from '@/components/ConfirmDiaglog'
import { toast } from 'react-toastify'

interface ItemDetailUserProps {
  sellerId: number
  sellerName: string
  sellerPhone: string
  sellerAvatar: string
  loading: boolean
}

const ItemDetailUser = ({
  sellerId,
  sellerName,
  sellerPhone,
  sellerAvatar,
  loading
}: ItemDetailUserProps) => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null

  const [isOpen, setIsOpen] = useState(false)
  const data = useLoaderData()
  const { id } = data as { id: string }

  const handleCreateOrder = async () => {
    const res = await createOrder({ watchId: Number(id), userId: user?.id })
    if (res) {
      setIsOpen(false)
      toast.success('Đặt hàng thành công', {
        onClose() {
          navigate('/')
        }
      })
    }
  }

  const handleOpenLogin = () => {
    navigate('/authenticate/login')
  }

  return (
    <Box sx={{ padding: 2 }} component={'div'} id={`${id}`}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {loading ? (
            <Skeleton variant="circular" width={80} height={80} />
          ) : (
            <Avatar
              alt="Thắng Nguyễn Store"
              src={sellerAvatar || 'https://via.placeholder.com/100'} // Replace with actual image URL
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
            <>
              <Typography variant="h6" fontWeight="bold">
                {sellerName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <Box component="span" sx={{ color: 'gold' }}>
                  ★★★★☆
                </Box>
                4.7 (
                <Link href="#" underline="hover">
                  10 đánh giá
                </Link>
                )
              </Typography>
            </>
          )}
        </Grid>
        <Grid item xs={5}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={40} />
          ) : (
            <Button variant="outlined" fullWidth startIcon={<PhoneIcon />}>
              {sellerPhone}
            </Button>
          )}
        </Grid>
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
                }
              }}
              startIcon={<ChatIcon />}
            >
              Chat với người bán
            </Button>
          )}
        </Grid>
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
          ) : sellerId !== user.id ? (
            <>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setIsOpen(true)}
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
                Đặt hàng
              </Button>
              <ConfirmDialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={handleCreateOrder}
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
      </Grid>
    </Box>
  )
}

export default ItemDetailUser
