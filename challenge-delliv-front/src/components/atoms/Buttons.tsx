import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


interface Props {
  variant: 'text' | 'outlined' | 'contained';
  text: string
  fullWidth: boolean
  id: string
  // handleSubmit: () => void
  
}
const ButtonSubmit = ({ fullWidth,variant,text, id, ...props }: Props) => {
  return (
    <Button
        type="submit"
        fullWidth={fullWidth}
        variant={variant}
        id={id}
        sx={{ mt: 3, mb: 2 }}
        {...props}
    >
        {text}
    </Button>
  );
};

ButtonSubmit.propTypes = {
  variant: PropTypes.oneOf(['text','outlined','contained']),
  text: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
};

export  { ButtonSubmit };