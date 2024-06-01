import Layout from '@/components/Layout'
import { CheckCircle } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import ImageUpload from './components/UploadFile'

interface ExpertisePageProps {}

const names = ['10', '20', '30']

const ExpertisePage = (props: ExpertisePageProps) => {
  return (
    <Layout>
      <Box
        component={'div'}
        sx={{
          marginTop: '120px',
          marginBottom: '40px',
          padding: '40px',
          backgroundColor: '#fff'
        }}
      >
        <Grid container spacing={4} paddingX={5}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              Thẩm định đồng hồ
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              component={'div'}
              sx={{
                padding: '16px',
                width: 'fit-content',
                backgroundColor: '#434343',
                paddingRight: '100px',
                marginLeft: '40px',
                color: '#fff',
                fontWeight: '600'
              }}
            >
              YOUR DETAILS
            </Typography>
            <Box
              sx={{
                marginTop: '20px',
                paddingX: '50px'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TextField placeholder="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    placeholder="Email Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    placeholder="Phone Number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Brand Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Model Number / Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} marginLeft={'40px'}>
            <Box>
              <Typography
                component={'div'}
                sx={{
                  padding: '16px',
                  width: 'fit-content',
                  backgroundColor: '#434343',

                  color: '#fff',
                  fontWeight: '600',
                  paddingRight: '50px'
                }}
              >
                ABOUT YOUR WATCH
              </Typography>
              <Typography
                component={'div'}
                color={'#434343'}
                fontSize={'12px'}
                textAlign={'left'}
              >
                **Click on your preferences below
              </Typography>
              <Box component={'div'} marginTop={'10px'}>
                <Grid container spacing={6} gap={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      Do you have the original box and papers?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Grid container spacing={12}>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          Yes
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          No
                        </Button>
                      </Grid>
                      <Grid item xs={2} alignContent={'flex-end'}>
                        <CheckCircle
                          sx={{
                            color: '#434343',
                            fontSize: '32px'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={6} gap={1} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography textAlign={'left'} fontSize={18} marginLeft={4}>
                      Do you have the original certificate of authenticity/ or
                      warranty card?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Grid container spacing={12}>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          Yes
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          No
                        </Button>
                      </Grid>
                      <Grid item xs={2} alignContent={'flex-end'}>
                        <CheckCircle
                          sx={{
                            color: '#434343',
                            fontSize: '32px'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={6} gap={1} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      Do you have proof of purchase?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Grid container spacing={12}>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          Yes
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          No
                        </Button>
                      </Grid>
                      <Grid item xs={2} alignContent={'flex-end'}>
                        <CheckCircle
                          sx={{
                            color: '#434343',
                            fontSize: '32px'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={6} gap={1} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      Is your watch unworn with sitcker intact?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Grid container spacing={12}>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          Yes
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          sx={{
                            paddingX: '40px',
                            color: '#434343',
                            borderColor: '#434343'
                          }}
                          size="large"
                          variant="outlined"
                        >
                          No
                        </Button>
                      </Grid>
                      <Grid item xs={2} alignContent={'flex-end'}>
                        <CheckCircle
                          sx={{
                            color: '#434343',
                            fontSize: '32px'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={4} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      How old is your watch?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Select label={'Value'} fullWidth>
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid container spacing={4} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      What is your desired selling price?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ marginRight: 1, fontSize: 15 }}>
                            VND
                          </Typography>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={4} marginTop={1}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      textAlign={'left'}
                      fontSize={18}
                      marginTop={1}
                      marginLeft={4}
                    >
                      Additional information (optional)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      variant="outlined"
                      rows={4}
                      fullWidth
                      multiline
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box>
              <Box marginLeft={'40px'}>
                <Typography
                  component={'div'}
                  sx={{
                    padding: '16px',
                    width: 'fit-content',
                    backgroundColor: '#434343',
                    paddingRight: '100px',

                    color: '#fff',
                    fontWeight: '600'
                  }}
                >
                  ABOUT YOUR WATCH
                </Typography>
                <Typography
                  component={'div'}
                  color={'#434343'}
                  fontSize={'18px'}
                  textAlign={'left'}
                  marginLeft={'20px'}
                >
                  Select up to 10 images of your watch to upload. Each file must
                  be less than 5MB in size
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: '20px',
                  paddingX: '50px'
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            sx={{
              paddingX: '40px',
              color: '#fff',
              backgroundColor: '#434343',
              borderColor: '#434343',
              marginTop: '20px',
              marginLeft: '40px'
            }}
            size="large"
            variant="outlined"
          >
            Submit Request
          </Button>
          <Box component={'div'} marginTop={'20px'}>
            <ImageUpload />
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default ExpertisePage
