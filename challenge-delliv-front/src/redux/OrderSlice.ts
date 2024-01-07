import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getAll, setNewStatus } from '../services/orders';

export interface IOrder {
  isProcessingRequest: boolean;
  data: {
    id: number | null,
    client_name: string,
    street: string,
    zipCode: string,
    number: string,
    state: string,
    city: string,
    neighborhood: string,
    status: string
   }[]
}

const initialState: IOrder = { isProcessingRequest: false, data: [{id: null, client_name: '', street: '', zipCode: '', number: '', state: '', city: '', neighborhood: '', status: ''}] };
export const orderSlice = createSlice({
  name: 'order',
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
        data: action.payload.response
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
export const getData = () => async (dispatch: (arg0: { payload: any; type: "order/success" | "order/error"; }) => void) => {

  try {
    const orderData = await getAll()
    dispatch(success(orderData.data));
    
  } catch (err: any) {
    dispatch(error(err));
  }
};

export const changeStatus = (status: string, orderId: number) => async (dispatch: (arg0: { payload: any; type: "order/success" | "order/error"; }) => void) => {

  try {
    const orderData = await setNewStatus(status, orderId)
    dispatch(success(orderData.data));
    
  } catch (err: any) {
    dispatch(error(err));
  }
};
export const { start, success, error } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;
export const orderReducer = orderSlice.reducer;