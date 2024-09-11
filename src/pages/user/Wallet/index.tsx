import { Box, Button, Typography } from '@mui/material'
import { User } from '../../item/ManageBuyOrder/type'
import { useState } from 'react'
import useSWR from 'swr'
import { AppPath } from '@/services/utils'
import { Transaction } from './type'

const WalletPage = () => {
  const local = JSON.parse(localStorage.getItem('user') || '') as User

  const [user, setUser] = useState<User>()
  const [balance, setBalance] = useState<number>(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const { isLoading } = useSWR<User>(AppPath.USER_INFO(local?.id), {
    onSuccess: (data) => {
      setUser(data)
    }
  })

  const { data: balanceData, isLoading: loadingBalance } = useSWR<number>(
    AppPath.USER_BALANCE(local?.id),
    {
      onSuccess: (data) => {
        setBalance(data)
      }
    }
  )

  const { data: transactionsRes, isLoading: loadingTransactions } = useSWR(
    AppPath.TRANSACTIONS,
    {
      onSuccess: (data) => {
        setTransactions(data)
      }
    }
  )

  return (
    <Box
      sx={{
        marginX: 16,
        marginTop: 12,
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minHeight: 'calc(100vh - 340px)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Box>
            <Typography>Xin chào</Typography>
            <Typography>{user?.name}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4
          }}
        >
          <Box>
            <Typography> dư tài khoản</Typography>
            <Typography>{balance}đ</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Nạp tiền
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default WalletPage
