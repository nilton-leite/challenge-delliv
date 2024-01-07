import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Order from "./components/pages/Order";
import SignIn from "./components/pages/Signin";

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import ProtectedRoute from './protectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/order",
    element: <ProtectedRoute> <Order /> </ProtectedRoute>,

  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();

