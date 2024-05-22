import { Container, styled } from '@mui/material'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const StyledLayout = styled(`div`)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Navbar />
      <Container
        sx={{
          marginTop: '60px'
        }}
      >
        {children}
      </Container>
      <Footer />
    </StyledLayout>
  )
}
export default Layout
