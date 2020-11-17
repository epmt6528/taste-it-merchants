// Libraries
import React from 'react'

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


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

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

function createData(orderNo, product, quantity, status, customerName, review, feedback, date ) {
  const reviewStars = "★"
  
  return {
    orderNo,
    product,
    quantity,
    status,
    customerInfo: [
      { customerName: customerName, review: reviewStars.repeat(review), feedback: feedback },
    ],
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {orderNoFormatter.format(row.orderNo)}
        </TableCell>
        <TableCell>{row.product}</TableCell>
        <TableCell>{quantityFormatter.format(row.quantity)}</TableCell>
        <TableCell>
          <TextField
          select
          variant="outlined"
          defaultValue={row.status}
          InputProps={{
            readOnly: true,
          }}
          >
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
                    <TableCell>Review</TableCell>
                    <TableCell>feedback</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.customerInfo.map((customerInfoRow) => (
                    <TableRow key={customerInfoRow.customerName}>
                      <TableCell component="th" scope="row">
                        {customerInfoRow.customerName}
                      </TableCell>
                      <TableCell>{customerInfoRow.review ? customerInfoRow.review : 'Not reviewed yet'}</TableCell>
                      <TableCell>{customerInfoRow.feedback ? customerInfoRow.feedback: 'Not reviewed yet'}</TableCell>
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


export default function OrderTable(props) {
  const rows = []
  const orders = props.orders
  
  for(let i=0; i<orders.length; i++){
    const newData = createData(i+1, orders[i].menuName, orders[i].forHowManyPeople, orders[i].orderStatusID, `${orders[i].firstName} ${orders[i].lastName}`, orders[i].rate, orders[i].review, orders[i].createdAt)
    rows[i]=(newData)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order No.</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} key={row.orderNo}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
