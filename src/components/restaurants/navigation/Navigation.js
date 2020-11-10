// Libraries
import React from 'react';
import {Switch, Route, Link, BrowserRouter } from 'react-router-dom';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

// Components
import Menus from '../menus/Menus'
import MenuDetail from '../menus/MenuDetail';
import EditDish from '../menus/EditDish'
import AddDish from '../menus/AddDish'
import ActiveOrders from '../activeOrders/ActiveOrders'
import OrderHistory from '../orderHistory/OrderHistory'
import Contact from '../contact/Contact'
import Account from '../account/Account'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
    width: '100%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanels: {
    width: '100%'
  }
}));


export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        {/* Navigation Menu */}
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          <Tab label="Active Orders" to="/restaurant/activeOrders" component={Link} />
          <Tab label="Menu"　to="/restaurant/menus" component={Link} />
          <Tab label="Order History" to="/restaurant/orderHistory" component={Link} />
          <Tab label="Account" to="/restaurant/account" component={Link}  />
          <Tab label="Contact" to="/restaurant/contact" component={Link} />
        </Tabs>
        
        {/* Active Order panel */}
        <TabPanel value={value} index={0} className={classes.tabPanels}>
          <ActiveOrders />
        </TabPanel>

        {/* Menu panel */}
        <TabPanel value={value} index={1} className={classes.tabPanels}>
          <Switch>
            <Route path="/restaurant/menus" component={Menus} />
            <Route path="/restaurant/menus/detail/:id" component={MenuDetail} />
            <Route path="/restaurant/menus/edit/:id"  component={EditDish} />
            <Route path="/restaurant/menus/add"  component={AddDish} />
          </Switch>
        </TabPanel>

        {/* Order History panel */}
        <TabPanel value={value} index={2} className={classes.tabPanels}>
            <Route path="/restaurant/orderHistory" component={OrderHistory} />
        </TabPanel>

        {/* Account panel */}
        <TabPanel value={value} index={3} className={classes.tabPanels}>
          <Account />
        </TabPanel>

        {/* Contact panel */}
        <TabPanel value={value} index={4} className={classes.tabPanels}>
            <Route path="/restaurant/contact" component={Contact} />
        </TabPanel>
      </div>
    </BrowserRouter>
    
  );
}
