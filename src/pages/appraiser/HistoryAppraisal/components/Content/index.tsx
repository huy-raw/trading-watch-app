import React from 'react'
import {
  Box,
  Pagination,
  PaginationItem,
  Typography,
  Skeleton
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { HistoryAppraisalType } from '../../type'
import moment from 'moment'

interface ContentProps {
  content: HistoryAppraisalType[]
  page: number
  setPage: (page: number) => void
  totalPages: number
  isLoading: boolean // Add isLoading prop to handle loading state
}

const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    borderRadius: '50%',
    '&.Mui-selected': {
      backgroundColor: '#333', // Selected page color
      color: '#fff'
    }
  }
})

const mappinStatus = (status: string) => {
  switch (status) {
    case 'wait':
      return 'Chờ xác nhận'
    case 'processing':
      return 'Đang xử lý'
    case 'complete':
      return 'Hoàn thành'
  }
}

const Content: React.FC<ContentProps> = ({
  content,
  page,
  setPage,
  totalPages,
  isLoading // Receive loading state
}) => {
  // Handler for pagination change
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage)
  }

  return (
    <Box sx={{ padding: 2 }}>
      {/* Check if data is loading */}
      {isLoading ? (
        // Display skeleton loaders when loading
        <>
          {[...Array(6)].map((_, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                marginBottom: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                textAlign: 'left'
              }}
            >
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={80} />
            </Box>
          ))}
        </>
      ) : content.length > 0 ? (
        // Render content if available
        content.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: 2,
              marginBottom: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ccc',
              textAlign: 'left'
            }}
          >
            <Box>
              <Typography>Mã yêu cầu: {item.id}</Typography>
              <Typography variant="body2" color="textSecondary">
                Thương hiệu đồng hồ: {item.brand}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2">
                {moment(item.createDate).format('DD/MM/YYYY')}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {(item.status && mappinStatus(item.status)) || 'Chờ xác nhận'}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <Typography>Không có dữ liệu.</Typography>
      )}

      {/* Custom Pagination */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: '50%',
                minWidth: '40px',
                height: '40px',
                fontSize: '16px'
              }}
            />
          )}
        />
      </Box> */}
    </Box>
  )
}

export default Content
