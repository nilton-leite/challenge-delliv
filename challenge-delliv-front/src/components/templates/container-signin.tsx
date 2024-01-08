

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from '../molecules/Copyright';
import TypographyComponent from '../atoms/Typography';
import AvatarComponent from '../molecules/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


interface Props {
  children: React.ReactNode;
}

const ContainerSignin = ({children,...props}: Props) => {
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AvatarComponent icon={<LockOutlinedIcon />}/>       

      <TypographyComponent variant="header" text='Sign in'/>
     
      <Box sx={{ mt: 1 }}>
        {children}
      </Box>
    </Box>
    <Copyright textLink='Nilton Amaral' link='https://www.delliv.me/' text='Challenge delliv' />
  </Container>
  );
};

export default ContainerSignin;