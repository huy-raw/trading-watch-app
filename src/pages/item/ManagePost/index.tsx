import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import ManagerPostTab from './components/ManagerPostTab'
import ManagerPostContent from './components/ManagerPostContent'
import { AppPath } from '@/services/utils'
import useSWR from 'swr'

export interface Product {
  address: string
  createDate: string
  imageUrl: string
  name: string
  price: number
  size: string
  status: 'SHOW' | 'HIDDEN' | 'SOLD'
  typePost: string
  numberDayPost: number
  timePost: string
}

const ManagePostPage = () => {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null

  const [tab, setTab] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoaded, setIsLoaded] = useState(false) // State to track loading completion
  const { data: posts, isLoading: isLoadingPost } = useSWR(
    user ? AppPath.GET_WATCH_BY_USER(user.id) : null, // Fetch data conditionally
    { refreshInterval: 30000 }
  )

  useEffect(() => {
    if (posts) {
      setProducts(posts)
      setIsLoaded(false) // Set loading completion state
    }
  }, [posts])

  return (
    <>
      <Container
        disableGutters
        component={'div'}
        sx={{
          backgroundColor: '#fff',
          paddingY: '40px',
          marginTop: '60px',
          minHeight: !isLoaded ? '61vh' : 'auto' // Apply minHeight conditionally
        }}
      >
        <ManagerPostTab
          name={user.name}
          isLoading={isLoaded}
          currentTab={tab}
          setTab={setTab}
          showTotal={
            products.filter((product) => product.status === 'SHOW').length ||
            products.length
          }
          hiddenTotal={
            products.filter(
              (product) =>
                product.status === 'HIDDEN' || product.status === 'SOLD'
            ).length
          }
        />
      </Container>
      <Container
        disableGutters
        component={'div'}
        sx={{
          marginTop: '20px',
          minHeight: isLoaded ? '64vh' : 'auto' // Apply minHeight conditionally
        }}
      >
        {tab === 0 && (
          <ManagerPostContent
            products={products.filter((product) => {
              return product
            })}
            isLoading={isLoaded}
          />
        )}
        {tab === 1 && (
          <ManagerPostContent
            products={products.filter((product) => {
              return product.status === 'HIDDEN' || product.status === 'SOLD'
            })}
            isLoading={isLoaded}
          />
        )}
      </Container>
    </>
  )
}

export default ManagePostPage
