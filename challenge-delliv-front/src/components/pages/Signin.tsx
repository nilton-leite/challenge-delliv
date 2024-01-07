import { createTheme, ThemeProvider } from '@mui/material/styles';

import ContainerSignin from '../templates/container-signin';
import { ButtonSubmit } from '../atoms/Buttons';
import  TextFields  from '../atoms/TextFields';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser, IAuthentication } from '../../redux/SigninSlice';
import { useForm, FormProvider, useFormContext, FieldValues } from "react-hook-form";
import React from 'react';
import { Alert } from '@mui/material';

const defaultTheme = createTheme();

export default function SignIn() {

  const dispatch = useAppDispatch();

  const [items,setItems] = React.useState<any>()
  const [showAlert,setShowAlert] = React.useState<boolean>(false)

  const methods = useForm({mode: 'all'});

  const onSubmit = (data: FieldValues) => {
    setShowAlert(false)

    if (data) {
        const userPayload = {
          username: data.email,
          password:  data.password
        }
        const dis = authenticateUser(userPayload)
        dispatch(dis);
        setShowAlert(true)
    }
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerSignin>
      <FormProvider {...methods} > 
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextFields
                margin="normal"
                labelRegister="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                autoComplete="email"
                autoFocus={true}/>

            <TextFields
              margin="normal"
              required
              fullWidth
              labelRegister="password"
              name="password"
              label="Password"
              id="password"
              type='password'
              autoComplete="current-password"
              autoFocus={false}
              />
            
            <ButtonSubmit id="send" text='Sign In' fullWidth={true} variant='contained'/>
            {showAlert && (
              <Alert severity="success">Sucesso. Você será redirecionado em poucos segundos.</Alert>
            )}
        </form>
        </FormProvider>
      </ContainerSignin>
    </ThemeProvider>
  );
}