import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import getUserListThunk from "../redux/thunks/appThunk"
import { useEffect } from 'react';


export default function Users() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.app.loading)
  const userList = useSelector(state => state.user.userList)

  useEffect(() => {
  dispatch(getUserListThunk())
  }, [])
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">USER NAME</TableCell>
            <TableCell align="right">E-MAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{loading ? "LOADING" : userList.map((user) => (
            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{user.id}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
            </TableRow>
          ))}</TableBody>
      </Table>
    </TableContainer>
  );
}
