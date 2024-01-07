
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import FooterLink from '../atoms/FooterLink';
interface Props {
  text: string;
  link: string;
  textLink: string
}
const Copyright = ({ link, textLink, text, ...props }: Props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {text + ' © '}
    <FooterLink link={link} text={textLink}/>
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
};
Copyright.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  textLink: PropTypes.string,
};

export default Copyright;