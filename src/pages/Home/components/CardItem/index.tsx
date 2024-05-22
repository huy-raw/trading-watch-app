import StyledImage from '@/components/StyledImage'
import { Box, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface CardItemProps {}

const CardItem: React.FC<CardItemProps> = () => {
  const navigate = useNavigate()
  return (
    <Paper
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: 'fit-content',
        height: 'fit-content',
        ':hover': {
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.3s',
          transform: 'scale(1.05)'
        }
      }}
      onClick={() => navigate('/:id')}
    >
      <Box
        component={'div'}
        sx={{
          width: '200px',
          height: '200px'
        }}
      >
        <StyledImage
          src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6"
          alt="Banner"
          style={{
            borderRadius: '10px'
          }}
        />
      </Box>
      <Box maxWidth={200} component={'div'}>
        <Typography color={'#675A5A'} marginTop={2}>
          BULOVA MARINE STAR WATCH 44MM
        </Typography>
      </Box>
    </Paper>
  )
}

export default CardItem
