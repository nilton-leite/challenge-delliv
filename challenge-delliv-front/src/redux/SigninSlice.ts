import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authenticate } from '../services/authentication';
import { setTokens } from '../services/localStorage';
import { RootState } from './store';

export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
  user: {
    name: string
  }
}

export interface UserPayload {
  username: string;
  password: string;
}


const initialState: IAuthentication = { isProcessingRequest: false, user: {name: ''} };
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
        user: {
          name: action.payload.user.name
        }
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});
export const authenticateUser = (userData: UserPayload) => async (dispatch: (arg0: { payload: any; type: "authentication/success" | "authentication/error"; }) => void) => {

  try {
    const authData = await authenticate(
     userData
    );
    setTokens(authData.data);
    dispatch(success(authData.data));
    window.location.href = '/order'
    
  } catch (err: any) {
    dispatch(error(err));
     alert('Usuario ou senha inválidos')
  }
};
export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;