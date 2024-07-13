import React, { useState, useEffect } from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import useSWR from 'swr'
import { AppPath } from '@/services/utils'

const FilterComponent = () => {
  const { data: brands, isLoading } = useSWR(AppPath.GET_BRANDS)
  const { data: types, isLoading: isLoadingTypes } = useSWR(AppPath.GET_TYPES)
  const [filters, setFilters] = useState({
    area: '',
    brand: '',
    price: '',
    status: '',
    type: '',
    condition: ''
  })
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  )

  const filterOptions = [
    {
      label: 'Khu vực',
      name: 'area',
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      label: 'Thương hiệu',
      name: 'brand',
      options: brands?.map((brand) => brand.brandName) || []
    },
    {
      label: 'Giá',
      name: 'price',
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      label: 'Trạng thái',
      name: 'status',
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      label: 'Loại',
      name: 'type',
      options: types?.map((type) => type.typeName) || []
    },
    {
      label: 'Tình trạng',
      name: 'condition',
      options: ['Option 1', 'Option 2', 'Option 3']
    }
  ]

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }))
  }

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    const timer = setTimeout(() => {
      // Implement the search functionality here
      console.log('Filters:', filters)
    }, 5000)

    setDebounceTimer(timer)

    return () => {
      clearTimeout(timer)
    }
  }, [filters])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      my={2}
    >
      <Typography>Sắp xếp theo</Typography>

      {filterOptions.map((filter) => (
        <TextField
          key={filter.name}
          select
          sx={{
            width: '150px'
          }}
          label={filter.label}
          variant="outlined"
          value={filters[filter.name]}
          onChange={(e) => handleFilterChange(filter.name, e.target.value)}
        >
          {filter.options.map((option, idx) => (
            <MenuItem key={idx} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ))}
    </Box>
  )
}

export default FilterComponent
