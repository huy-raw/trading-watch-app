import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled
} from '@mui/material'
import Logo from '@/assets/app-logo.png'
import SearchIcon from '@mui/icons-material/Search'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswerOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'
import ArticleIcon from '@mui/icons-material/ArticleOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

const pages = [
  { title: 'Thương Hiệu', href: '/' },
  { title: 'Đồng Hồ', href: '/' },
  { title: 'Thẩm định', href: '/' }
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const StyledLogo = styled('img')({
  height: '40px'
})

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#4E4E4E',
        maxHeight: '60px',
        width: '100%'
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box marginLeft={10}>
          <StyledLogo src={Logo} alt="logo" />
        </Box>
        <Box>
          {pages.map((page) => (
            <Button
              key={page.title}
              sx={{
                textTransform: 'none'
              }}
              color="inherit"
              href={page.href}
            >
              {page.title}
            </Button>
          ))}
        </Box>
        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box>
          <Button color="inherit">
            <QuestionAnswerIcon fontSize="large" />
          </Button>
          <Button color="inherit">
            <ShoppingCartIcon fontSize="large" />
          </Button>
          <Button color="inherit">
            <ArticleIcon fontSize="large" />
          </Button>
        </Box>
        <Box marginRight={10}>
          <Button color="inherit">
            <AccountCircleIcon
              fontSize="large"
              sx={{
                marginRight: '10px'
              }}
            />
            <Typography>Thang Ngu</Typography>
            <ExpandMoreOutlinedIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
