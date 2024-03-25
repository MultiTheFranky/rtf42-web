import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAppwriteContext } from '@/hooks/appwrite';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { Layout } from '@/components/Layout';

export function SignIn() {
  const { account, user, setUser } = useAppwriteContext();
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
    React.useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate, user]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
    await account.createEmailPasswordSession(data.get('email') as string, data.get('password') as string)
    const userAccount = await account.get();
    setUser(
      {
        email: userAccount.email,
        name: userAccount.name,
        id: userAccount.$id
      }
    );
    navigate('/');
    } catch (_) {
      setError('Invalid email or password');
    }
  };

  return (
    <Layout isLogin>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type='email'
            error={error !== null}
          />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            autoComplete="current-password"
            error={error !== null}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Box>
      {error && <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open
          autoHideDuration={6000}
        >
          <Alert severity="error">
            {error}
          </Alert>
        </Snackbar >
      }
      </Container>
    </Layout>
  );
}