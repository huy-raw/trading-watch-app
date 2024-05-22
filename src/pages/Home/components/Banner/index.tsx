import BannerImage from '@/assets/banner.png'
import { Container, Typography } from '@mui/material'
import StyledImage from '../../../../components/StyledImage'

const Banner = () => {
  return (
    <Container
      sx={{
        margin: '30px auto',
        borderBottom: '2px solid #8C8B8B',
        paddingBottom: '77px'
      }}
    >
      <StyledImage src={BannerImage} alt="Banner" />
      <Typography variant="h4" color={'#675A5A'} marginTop={2}>
        Sàn Giao Dịch Mua Bán Thẩm Định Đồng Hồ <br />
        Mang Đến Các Dịch Vụ Chất Lượng
      </Typography>
    </Container>
  )
}

export default Banner
