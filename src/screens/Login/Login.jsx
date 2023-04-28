import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { loginUserRedux } from '../../reducers/loginSlice'
import { login } from '../../actions/conexion_api'
import Copyright from '../../components/Footer/Copyright/Copyright'

const theme = createTheme();

export default function Login() {
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('username');
    const password = data.get('password');
    const loginUser = await login(email, password);
    if (loginUser.status === 200) {
      dispatch(loginUserRedux({isLogin: true, user: 'ADMIN'}))
      history('/dashboard')
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="s">
        <CssBaseline  />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mt: 20,  bgcolor: 'rgba(33,42,62,1)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button className='btn-login'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, bgcolor: 'rgba(33,42,62,1)' }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 10, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}