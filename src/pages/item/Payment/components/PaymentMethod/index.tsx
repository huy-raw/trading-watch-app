import React from 'react'
import { Box, Button, Divider, Link, Typography, Skeleton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Zalo from '@/assets/logoZalo.png'
import Momo from '@/assets/logoMomo.png'
import thanhtoantructiep from '@/assets/thanhtoantructiep.png'

const methods = [
  { name: 'ZaloPay', image: Zalo },
  { name: 'Momo', image: Momo },
  { name: 'ThanhToanTrucTiep', image: thanhtoantructiep }
]

interface PaymentMethodProps {
  price: number
  extraPrice: number
  paymentMethod: string
  handleChangeMethod: (method: string) => void
  isLoading?: boolean
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  price,
  extraPrice,
  paymentMethod,
  handleChangeMethod,
  isLoading
}) => {
  const total = price + extraPrice
  const navigate = useNavigate()

  const handleSubmit = () => {
    toast.success(`Đặt hàng thành công với phương thức ${paymentMethod}`, {
      onClose() {
        navigate('/')
      }
    })
  }

  return (
    <Box
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      m={2}
      component={'div'}
      bgcolor={'#FFFFFF'}
    >
      <Box
        component={'div'}
        borderBottom={'1px solid #D0D0D0'}
        textAlign={'left'}
      >
        <Typography
          component={'div'}
          variant="h6"
          gutterBottom
          margin={2}
          color={'#000000'}
        >
          Phương thức thanh toán
        </Typography>

        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          padding={2}
          flexDirection={'row'}
        >
          {isLoading
            ? Array.from(new Array(3)).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={160}
                  height={100}
                  sx={{ marginX: 2, borderRadius: 2 }}
                />
              ))
            : methods.map((item, index) => (
                <Box
                  key={index}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={4}
                  width={160}
                  height={150}
                  marginX={2}
                  border={
                    paymentMethod === item.name
                      ? '2px solid blue'
                      : '1px solid #D7D7D7'
                  }
                  borderRadius={2}
                  onClick={() => handleChangeMethod(item.name)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'blue'
                    }
                  }}
                >
                  <img
                    style={{
                      margin: '0 auto',
                      marginTop: 10
                    }}
                    src={item.image}
                    alt={item.name}
                  />
                  {item.name === 'ThanhToanTrucTiep' && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      Thanh toán bằng tiền mặt
                    </Typography>
                  )}
                </Box>
              ))}
        </Box>
        <Divider />
        <Box
          width={'full'}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Box
            width={360}
            display={'flex'}
            justifyContent="flex-end"
            flexDirection={'column'}
          >
            {isLoading ? (
              <>
                <Skeleton width="100%" height={30} />
                <Skeleton width="100%" height={30} sx={{ my: 1 }} />
                <Skeleton width="100%" height={30} />
              </>
            ) : (
              <>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  flexDirection={'row'}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#9A9A9A'
                    }}
                  >
                    Tổng tiền
                  </Typography>
                  <Typography marginRight={2} fontWeight={'bold'}>
                    {price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#9A9A9A'
                    }}
                  >
                    Chi phí khác
                  </Typography>
                  <Typography marginRight={2} fontWeight={'bold'}>
                    {extraPrice.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#9A9A9A'
                    }}
                  >
                    Tổng thanh toán
                  </Typography>
                  <Typography marginRight={2} fontWeight={'bold'}>
                    {total.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Divider sx={{ mx: 2 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 2
          }}
        >
          <Typography component={'div'} display={'flex'} marginTop={2}>
            Nhấn “Đặt hàng” đồng nghĩa với việc bạn đồng ý
            <Link marginLeft={1}>điều khoản Timepiece</Link>
          </Typography>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              padding: '10px 60px'
            }}
            disabled={isLoading}
          >
            Đặt hàng
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PaymentMethod
