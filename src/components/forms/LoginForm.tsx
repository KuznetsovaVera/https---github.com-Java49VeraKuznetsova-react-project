export const LoginForm: React.FC = () => {
    return <div></div>
}
/* MY code
import { Alert, AlertTitle, Avatar, Box, Button, Container, createTheme, CssBaseline, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginData } from "../../model/LoginData";
import { useRef, useState } from "react";

type props = {
    submitFn: (loginData: LoginData) => boolean
    message?: string
    flAlert?: boolean
}

export const LoginForm: React.FC<props> = ({submitFn, message, flAlert}) => {
    const theme = createTheme();
    const [mesAlert, setMesAlert] = useState<boolean>(true);
    const logCur = useRef<LoginData>({username:'', password:''})
   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
  
      logCur.current.username= String(data.get('email'));
      logCur.current.password=String(data.get('password'));
    
      submitFn(logCur.current);
      setMesAlert(true);
       console.log('logCurData',  logCur )
    
      
      }
    function handlerAlert () {
        setMesAlert(false);
    }

    function Copyright(props: any) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex',
                flexDirection: 'column',  alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">  Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField  margin="normal" required  fullWidth
                  id="email" label="Email Address"  name="email"
                  autoComplete="email" autoFocus />

                <TextField margin="normal" required fullWidth
                  name="password" label="Password" type="password"
                  id="password"  autoComplete="current-password"/>
              
              {flAlert && mesAlert &&
            <Alert severity="error" variant="outlined"
             onClose={handlerAlert}>
                  <AlertTitle>Error</AlertTitle>
                {message}</Alert>
            }

                <Button type="submit" fullWidth variant="contained"
                  sx={{ mt: 3, mb: 2 }}> Sign In
                </Button>
               
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
    }
    
*/   
