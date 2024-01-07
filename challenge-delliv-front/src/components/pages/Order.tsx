import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../organisms/Orders';
import Copyright from '../molecules/Copyright';
import AppBarComponent from '../organisms/AppBar';
import DrawerComponent from '../organisms/Drawer';
import { useAppDispatch } from '../../redux/hooks';
import { getData } from '../../redux/OrderSlice';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Order() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dispatch = useAppDispatch();

  const getOrders = () => {
    dispatch(getData());
  }

  React.useEffect(getOrders, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarComponent open={() => open} toggleDrawer={() => toggleDrawer}/>
        <DrawerComponent open={() => open} toggleDrawer={() => toggleDrawer}/>
       
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright textLink='Nilton Amaral' link='https://www.delliv.me/' text='Challenge delliv' />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}