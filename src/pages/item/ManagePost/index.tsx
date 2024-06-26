import { Container } from '@mui/material'
import { FC, useState } from 'react'
import ManagerPostTab from './components/ManagerPostTab'
import ManagerPostContent from './components/ManagerPostContent'
import UserLayout from '@/components/Layout/UserLayout'

interface ManagePostPageProps {}

const ManagePostPage: FC<ManagePostPageProps> = () => {
  const [tab, setTab] = useState(0)

  const mockedData = {
    name: 'Tuan Nguyen'
  }
  return (
    <UserLayout>
      <Container
        disableGutters
        component={'div'}
        sx={{
          backgroundColor: '#fff',
          paddingY: '40px',
          marginTop: '60px'
        }}
      >
        <ManagerPostTab
          name={mockedData.name}
          currentTab={tab}
          setTab={setTab}
        />
      </Container>
      <ManagerPostContent />
    </UserLayout>
  )
}

export default ManagePostPage
