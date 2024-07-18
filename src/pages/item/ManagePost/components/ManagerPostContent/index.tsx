import React from 'react'
import { Box } from '@mui/material'
import ProductCard from '../PostCard'

interface Product {
  imageUrl: string
  name: string
  price: number
  address: string
  typePost: string
  numberDayPost: number
  timePost: string
}

interface ManagerPostContentProps {
  products: Product[]
  isLoading: boolean
}

const ManagerPostContent: React.FC<ManagerPostContentProps> = ({
  products,
  isLoading
}) => {
  return (
    <Box marginTop={2} marginBottom={8}>
      {!isLoading &&
        products?.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            address={product.address}
            typePost={product.typePost}
            numberDayPost={product.numberDayPost}
            timePost={product.timePost}
            isLoading={isLoading}
          />
        ))}
    </Box>
  )
}

export default ManagerPostContent
