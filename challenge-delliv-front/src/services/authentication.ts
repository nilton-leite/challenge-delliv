import { getAccessToken } from './localStorage';
import { env_var } from '../config/env';
import axios from 'axios'

export interface AuthPayload {
  username: string;
  password: string;
}

interface ReturnAuthenticate {
    status: boolean,
    data: {}
}

export const authenticate = async (data: AuthPayload): Promise<ReturnAuthenticate> => {
  let rest:ReturnAuthenticate = { status: false , data: "Something went wrong"};
    await axios.post(`http://localhost:3003/auth`, {username: data.username, password: data.password}).then(function (response) {
      rest = { status: true, data: response.data}
      })
      .catch(function (error) {
        rest = { status: true, data: "Something went wrong"};
      });

    return rest
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};