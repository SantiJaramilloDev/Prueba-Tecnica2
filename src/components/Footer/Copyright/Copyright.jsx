import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://santiago-jaramillo-dev.netlify.app/index.html" target="_blank">
        Santiago Jaramillo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}