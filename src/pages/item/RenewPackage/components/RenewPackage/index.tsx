import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup
} from '@mui/material'

interface RenewPackageProps {
  selectedPackage: string
  setSelectedPackage: (method: string) => void
}

const RenewPackage = ({
  selectedPackage,
  setSelectedPackage
}: RenewPackageProps) => {
  const packages = [
    { value: '7days', label: 'Đăng tin 7 ngày', price: 50000 },
    { value: '14days', label: 'Đăng tin 14 ngày', price: 145000 },
    { value: '30days', label: 'Đăng tin 30 ngày', price: 250000 }
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: 18, textAlign: 'left' }}>
        Chọn gói gia hạn
      </Typography>
      <RadioGroup
        value={selectedPackage}
        onChange={(e) => setSelectedPackage(e.target.value)}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: '40px',
          justifyContent: 'space-between'
        }}
      >
        {packages.map((pkg) => (
          <FormControlLabel
            key={pkg.value}
            value={pkg.price}
            control={
              <Radio
                sx={{
                  display: 'none'
                }}
              />
            }
            label={
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '10px 40px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor:
                    selectedPackage === pkg.value
                      ? 'primary.main'
                      : 'rgba(0, 0, 0, 0.23)',
                  backgroundColor:
                    selectedPackage === pkg.value ? '#f9f9f9' : '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{pkg.label}</Typography>
                <Typography sx={{ color: 'green', fontWeight: 500 }}>
                  {pkg.price.toLocaleString()}đ
                </Typography>
              </Box>
            }
            sx={{ margin: 0 }}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}

export default RenewPackage
