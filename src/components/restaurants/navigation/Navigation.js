import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Menus from '../menus/Menus'
import {Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import MenuDetail from '../menus/MenuDetail';
import EditDish from '../menus/EditDish'
import AddDish from '../menus/AddDish'
import ActiveOrders from '../activeOrders/ActiveOrders'
import OrderHistory from '../orderHistory/OrderHistory'
import Contact from '../contact/Contact'
import Account from '../account/Account'
// import RestaurantInfoEditor from '../account/components/RestaurantInfoEditor';


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
        
        <TabPanel value={value} index={0} className={classes.tabPanels}>
          {/* <Switch>
            <Route path="/restaurant" exact component={ActiveOrders} />
          </Switch> */}
          <ActiveOrders />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanels}>
          <Switch>
            <Route path="/restaurant/menus" exact component={Menus} />
            <Route path="/restaurant/menus/detail/:id" component={MenuDetail} />
            <Route path="/restaurant/menus/edit/:id"  component={EditDish} />
            <Route path="/restaurant/menus/add"  component={AddDish} />
          </Switch>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanels}>
          <Switch>
            <Route path="/restaurant/orderHistory" exact component={OrderHistory} />
          </Switch>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanels}>
          {/* <Switch>
            <Route path="/restaurant/account" exact component={Account} />
            <Route path="/restaurant/account/edit" exact component={RestaurantInfoEditor} />
          </Switch> */}
          <Account />
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabPanels}>
          <Switch>
            <Route path="/restaurant/contact" exact component={Contact} />
          </Switch>
        </TabPanel>
        
      </div>
    </BrowserRouter>
    
  );
}
