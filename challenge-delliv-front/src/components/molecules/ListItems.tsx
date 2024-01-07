import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ExitToAppOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const ListItems = () => {
  const navigate = useNavigate();

  const onExit = () => {
    navigate('/')
  }
 return (
    <React.Fragment>
      <ListItemButton onClick={onExit}>
        <ListItemIcon>
          <ExitToAppOutlined />
        </ListItemIcon>
        <ListItemText primary="Exit" />
      </ListItemButton>  
    </React.Fragment>
  );
}

export default ListItems;

