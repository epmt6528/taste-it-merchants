import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TextField  from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(orderID, orderNo, product, quantity, status, customerName, address, phoneNumber, instructions, dateTime) {
  return {
    orderID,
    orderNo,
    product,
    quantity,
    status,
    customerInfo: [
      { customerName: customerName, address: address, phoneNumber: phoneNumber, instructions: instructions, dateTime },
    ],
  };
}

function Row(props) {
  const { row, onStatusChange } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderNo}
        </TableCell>
        <TableCell align="right">{row.product}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">
          <TextField
          select
          variant="outlined"
          defaultValue={row.status}
          onChange={e => onStatusChange(row.orderID, e.target.value)}
          >
            <MenuItem key='0' value='1'>Waiting to be confirmed</MenuItem>
            <MenuItem key='1' value='2'>Being Prepared</MenuItem>
            <MenuItem key='2' value='3'>Being Delivered</MenuItem>
            <MenuItem key='3' value='4'>Delivered</MenuItem>
            <MenuItem key='4' value='5'>Reviewed</MenuItem>
          </TextField>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Customer's name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Instructions</TableCell>
                    <TableCell align="right">Date & Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.customerInfo.map((customerInfoRow) => (
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {customerInfoRow.customerName}
                      </TableCell>
                      <TableCell>{customerInfoRow.address}</TableCell>
                      <TableCell align="right">{customerInfoRow.phoneNumber}</TableCell>
                      <TableCell align="right">{customerInfoRow.instructions}</TableCell>
                      <TableCell align="right">{customerInfoRow.dateTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [];

export default function OrderTable(props) {
    
  const {orders, onStatusChange} = props

  for(let i=0; i<orders.length; i++){
    const newData = createData(orders[i].orderID, i+1, orders[i].menuName, orders[i].forHowManyPeople, orders[i].orderStatusID, `${orders[i].firstName} ${orders[i].lastName}`, `${orders[i].address} ${orders[i].postcode} `, orders[i].phoneNumber,  orders[i].instructions, orders[i].createdAt)
    console.log(newData)
    rows[i] = (newData)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order No.</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} onStatusChange={onStatusChange}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
