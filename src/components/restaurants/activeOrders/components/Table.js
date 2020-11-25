// Libraries
import React from 'react'
import moment from 'moment'
import MediaQuery from 'react-responsive';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import TextField  from "@material-ui/core/TextField"
import MenuItem from '@material-ui/core/MenuItem'

// Images
import CustomerIcon from "../../../../img/icons/account.svg"
import AddressIcon from "../../../../img/icons/location.svg"
import PhoneIcon from "../../../../img/icons/phone.svg"
import InstructionIcon from "../../../../img/icons/instructions.svg"
import TimeIcon from "../../../../img/icons/time.svg"

// Other
import {BASE_URL} from "../../../../config/config"


// Order No. Formatter
const orderNoFormatter = new Intl.NumberFormat('en', {
  minimumIntegerDigits: 3, 
  useGrouping: false
});

// Quantity Formatter
const quantityFormatter = new Intl.NumberFormat('en', {
  minimumIntegerDigits: 2, 
  useGrouping: false
});


function createData(orderID, orderNo, menuID, product, quantity, status, customerName, address, phoneNumber, instructions, dateTime) {
  const formattedDate = moment(dateTime).format('MMM Do - h:mm a')

  return {
    orderID,
    orderNo,
    menuID,
    product,
    quantity,
    status,
    customerInfo: [
      { customerName: customerName, address: address, phoneNumber: phoneNumber, instructions: instructions, dateTime: formattedDate },
    ],
  }
}


function Row(props) {
  const { row, onStatusChange } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow className="ordersTable__row">
        {/* Order No. */}
        <TableCell component="th" scope="row"  onClick={() => setOpen(!open)}>
          <div className="ordersTable__orderNoWrap">
            <div className="ordersTable__orderNo"><div>{orderNoFormatter.format(row.orderNo)}</div></div>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </TableCell>

        {/* For Mobile Design */}
        <MediaQuery maxDeviceWidth={1200}>
          <TableCell  className="ordersTable__nameQuantityCell" onClick={() => setOpen(!open)}>
            {/* Product Name */}
            <div className="ordersTable__productName" >{row.product}</div>
            {/* Quantity */}
            <div  className="ordersTable__quantity" >{quantityFormatter.format(row.quantity)}</div>
          </TableCell>
        </MediaQuery>

        {/* For Desk top Design */}
        <MediaQuery minDeviceWidth={1201}>
          <TableCell className="ordersTable__productName" onClick={() => setOpen(!open)}>
            <div  className="ordersTable__productName-wrap">
              {/* Menu Image */}
              <img src={`${BASE_URL}/menus/image/${row.menuID}`}  alt="Menu Image" className="ordersTable__menuImg"/>
              {/* Product Name */}
              <span>{row.product}</span>
            </div>
          </TableCell>
          {/* Quantity */}
          <TableCell  className="ordersTable__quantity" onClick={() => setOpen(!open)}>{quantityFormatter.format(row.quantity)}</TableCell>
        </MediaQuery>


        {/* Status */}
        <TableCell className="ordersTable__statusDropdown">
          <TextField
          select
          variant="outlined"
          defaultValue={row.status}
          onChange={e => onStatusChange(row.orderID, e.target.value)}
          style={{width: '300px'}}
          >
            <MenuItem key='0' value='1'>Waiting to be confirmed</MenuItem>
            <MenuItem key='1' value='2'>Being Prepared</MenuItem>
            <MenuItem key='2' value='3'>Being Delivered</MenuItem>
            <MenuItem key='3' value='4'>Delivered</MenuItem>
          </TextField>
        </TableCell>
      </TableRow>
      <TableRow>
        {/* Detail Table */}
        <TableCell className="ordersTable__detailTable" colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <hr />
              <Table size="small" aria-label="purchases" style={{ display: 'flex', flexDirection: 'row'}}>
                <TableHead className="ordersTable__detailTable-tabelHeader" >
                  <TableRow style={{ display: 'flex', flexDirection: 'column'}}>
                    <TableCell className="ordersTable__detailTable-tHCell"><img src={CustomerIcon}/><span>Customer's name</span></TableCell>
                    <TableCell className="ordersTable__detailTable-tHCell"><img src={AddressIcon}/><span>Address</span></TableCell>
                    <TableCell className="ordersTable__detailTable-tHCell"><img src={PhoneIcon}/><span>Phone Number</span></TableCell>
                    <TableCell className="ordersTable__detailTable-tHCell"><img src={InstructionIcon}/><span>Instructions</span></TableCell>
                    <TableCell className="ordersTable__detailTable-tHCell"><img src={TimeIcon}/><span>Date & Time</span></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.customerInfo.map((customerInfoRow) => (
                    <TableRow key={customerInfoRow.customerName}  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                      <TableCell component="th" scope="row"  style={{ border: 'none', fontFamily: 'NexaXBold'}}>
                        {customerInfoRow.customerName}
                      </TableCell>
                      <TableCell style={{ border: 'none', fontFamily: 'NexaXBold'}}>{customerInfoRow.address}</TableCell>
                      <TableCell style={{ border: 'none', fontFamily: 'NexaXBold'}}>{customerInfoRow.phoneNumber}</TableCell>
                      <TableCell style={{ border: 'none', fontFamily: 'NexaXBold'}}>{customerInfoRow.instructions}</TableCell>
                      <TableCell style={{ border: 'none', fontFamily: 'NexaXBold'}}>{customerInfoRow.dateTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = []

export default function OrderTable(props) {

  const {orders, onStatusChange} = props

  for(let i=0; i<orders.length; i++){
    console.log(orders[i])
    const newData = createData(orders[i].orderID, i+1, orders[i].menuID, orders[i].menuName, orders[i].forHowManyPeople, orders[i].orderStatusID, `${orders[i].firstName} ${orders[i].lastName}`, `${orders[i].address} ${orders[i].postcode} `, orders[i].phoneNumber,  orders[i].instructions, orders[i].createdAt)
    rows[i] = (newData)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className="ordersTable__tabelHeader">
          <TableRow>
            <TableCell className="table__orderNoHeader">Order No.</TableCell>
            <TableCell className="table__productHeader">Product</TableCell>
            <TableCell className="table__quantityHeader">Quantity</TableCell>
            <TableCell className="table__statusHeader">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} key={row.orderNo} onStatusChange={onStatusChange}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
