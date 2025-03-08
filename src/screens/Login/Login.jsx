import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserRedux } from '../../reducers/loginSlice'; // Importa la acción
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import Copyright from '../../components/Footer/Copyright/Copyright';

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // 🚀 Usamos Redux Dispatch

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('username');
    const password = data.get('password');
    if (email === 'admin' && password === 'admin') {
      dispatch(loginUserRedux({ isLogin: true, user: 'ADMIN' }));
            navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <h1 className='msg'>Las credenciales son admin para usuiario y contraseña</h1>
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mt: 20, bgcolor: 'rgba(33,42,62,1)' }}>
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