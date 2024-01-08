import { useNavigate } from 'react-router-dom';
import { getAccessToken, removeTokens } from './services/localStorage';
import { useEffect } from 'react';

const ProtectedRoute = ({children}: any) => {

    const navigate = useNavigate();

    useEffect(() => {
      if(!getAccessToken()) {
         removeTokens()
         navigate("/")
       }
    }, []);

  
 return children

};

export default ProtectedRoute;