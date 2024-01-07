import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
interface Props {
  text: string;
  link: string;
}
const FooterLink = ({ link, text, ...props }: Props) => {
  return (
    <Link color="inherit" href={link}>
    {text + ' '}
    </Link>
  );
};
FooterLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default FooterLink;