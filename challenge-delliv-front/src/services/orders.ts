import axios from 'axios'
import { getAccessToken } from './localStorage';


interface ReturnOrder {
    status: boolean,
    data: {}
}

export const getAll = async (): Promise<ReturnOrder> => {
  let rest:ReturnOrder = { status: false , data: "Something went wrong"};
    await axios.get(`http://localhost:3003/orders`, { headers: { Authorization: `Bearer ${getAccessToken()!.replace('"','').replace('"','')}`}}).then(function (response) {
      rest = { status: true, data: response.data}
      })
    .catch(function (error) {
        rest = { status: true, data: "Something went wrong"};
    });

    return rest
};

export const setNewStatus = async (status: string, orderId: number): Promise<ReturnOrder> => {
  let rest:ReturnOrder = { status: false , data: "Something went wrong"};
    await axios.put(`http://localhost:3003/orders/update/status/${orderId}`, {status}, { headers: { Authorization: `Bearer ${getAccessToken()!.replace('"','').replace('"','')}`}}).then(function (response) {
      rest = { status: true, data: response.data}
      })
    .catch(function (error) {
        rest = { status: true, data: "Something went wrong"};
    });

    return rest
};