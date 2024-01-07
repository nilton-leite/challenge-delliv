import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';

const getMappedVariant = (variant: 'header' | 'title' | 'subtitle' | 'body') => {
  switch (variant) {
    case "header":
      return "h5";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

interface Props {
    variant: 'header' | 'title' | 'subtitle' | 'body'
    text: string
    
  }

const TypographyComponent = ({ text,variant, ...props }: Props) => (
  <Typography variant={getMappedVariant(variant)}>
    {text}
  </Typography>
);

TypographyComponent.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

TypographyComponent.defaultProps = {
  variant: "body",
};

export default TypographyComponent;