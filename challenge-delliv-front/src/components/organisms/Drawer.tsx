

import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItems from '../molecules/ListItems';
import TypographyComponent from '../atoms/Typography';


interface Props {
  open: any;
  toggleDrawer: any;
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const DrawerComponent = ({ open, toggleDrawer, ...props }: Props) => {

    
  return (
    <Drawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: [1],
      }}
    >
        <TypographyComponent text='Challenge delliv' variant='title' />
    </Toolbar>
    <Divider />
    <List component="nav">
      <ListItems/>
    </List>
  </Drawer>
  );
};
DrawerComponent.propTypes = {
  toggleDrawer: PropTypes.func,
  open: PropTypes.func,
};

export default DrawerComponent;