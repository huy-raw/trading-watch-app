import { Container, styled } from '@mui/material'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const StyledLayout = styled(`div`)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  width: 80%;
  height: 100%;
  background-color: #f5f5f5;
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <StyledLayout>
        <Container>{children}</Container>
      </StyledLayout>
      <Footer />
    </div>
  )
}
export default Layout
