import { Box, Typography } from '@mui/material'

interface WatchInfoProps {
  image?: string
  name?: string
  price?: number
  address?: string
}

const WatchInfo = (props: WatchInfoProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Box>
        <img src={props.image} alt={props.name} width={80} height={80} />
      </Box>
      <Box
        sx={{
          textAlign: 'left'
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
          {props.name}
        </Typography>
        <Typography sx={{ color: '#CA2C2C', fontWeight: 600 }}>
          {props.price?.toLocaleString('')}đ
        </Typography>
        <Typography sx={{ color: 'gray', marginTop: 2 }}>
          {props.address}
        </Typography>
      </Box>
    </Box>
  )
}

export default WatchInfo
