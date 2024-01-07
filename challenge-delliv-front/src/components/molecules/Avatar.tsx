
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
interface Props {
  icon: JSX.Element;
}
const AvatarComponent = ({ icon, ...props }: Props) => {
  return (
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} {...props}>
    {icon}
    </Avatar>
  );
};
AvatarComponent.propTypes = {
  icon: PropTypes.element,
};

export default AvatarComponent;