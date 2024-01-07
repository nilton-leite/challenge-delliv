import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../atoms/Title';
import { store } from '../../redux/store';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { changeStatus } from '../../redux/OrderSlice';
import { useAppDispatch } from '../../redux/hooks';


interface Return {
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

export default function Orders() {

  const dispatch = useAppDispatch();

  const [items,setItems] = React.useState<Return>()
  const handleChange = (orderId: number | null, event: SelectChangeEvent) => {
    const newStatus = event.target.value

    try {
     if (orderId != null) {
       const dis = changeStatus(newStatus, orderId)
       dispatch(dis);
       window.location.reload()
       alert('Status alterado com sucesso!')
     }
    } catch (error) {
      alert('Ocorreu algum erro ao alterar o status. Verifique!')
    }
  };

  const getOrders = () => {
    store.subscribe(() => setItems(store.getState().order));
  }

  React.useEffect(() => {
    getOrders()
  },[])

  

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>State</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Neighborhood</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items ? items.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.client_name}</TableCell>
              <TableCell>{row.street}</TableCell>
              <TableCell>{row.zipCode}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.neighborhood}</TableCell>
              <TableCell>
              <Select
                defaultValue={row.status}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Status"
                  onChange={(value) => handleChange(row.id,value)}
              >
                <MenuItem value={'PENDING'}>PENDING</MenuItem>
                <MenuItem value={'IN_PROGRESS'}>IN_PROGRESS</MenuItem>
                <MenuItem value={'FINALIZED'}>FINALIZED</MenuItem>
              </Select>
              </TableCell>
            </TableRow>
          )): null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}