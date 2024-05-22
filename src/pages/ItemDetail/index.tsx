import Layout from '@/components/Layout'
import { Container, Grid } from '@mui/material'
import ItemDetail from './components/ItemDetail'
import ItemDetailUser from './components/ItemDetailUser'

const ItemDetailPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ItemDetail />
          </Grid>
          <Grid item xs={12} md={4}>
            <ItemDetailUser />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ItemDetailPage
