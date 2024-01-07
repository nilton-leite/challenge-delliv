import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';


interface Props {
  margin: "normal" | "dense" | "none" | undefined;
  required: boolean
  fullWidth: boolean
  name?: string
  label: string
  id?: string
  labelRegister: string
  autoComplete?: string
  type: "password" | "email" | "text"
  autoFocus: boolean
}
const TextFields = ({ autoFocus = false, labelRegister,type, margin,required,fullWidth,name,label, id,autoComplete, ...props }: Props) => {

  const { register } = useFormContext();
  return (
    <TextField
      {...register(labelRegister)}
        margin={margin}
        required={required}
        fullWidth={fullWidth}
        name={name}
        label={label}
        type={type}
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      />
  );
};

TextFields.propTypes = {
    margin: PropTypes.oneOf(["normal","dense","none",undefined]),
    type: PropTypes.oneOf(["password","email","text"]),
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    labelRegister: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool
};


export default  TextFields ;