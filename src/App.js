import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import NavSidebar from './components/NavSidebar';
import ArtistPage from './components/Artists/ArtistPage';
import UserPage from './components/Users/UserPage';
import AddArtistForm from './components/Artists/AddArtistForm';
import EmployeePage from './components/Employees/EmployeePage';
import AddEmployeeForm from './components/Employees/AddEmployeeForm';
import PaymentPage from './components/Payments/PaymentPage';
import ArtistDetails from './components/Artists/ArtistDetails';
import EmployeeDetails from './components/Employees/EmployeeDetails';
import ArtistPayment from './components/Artists/ArtistPayment';

export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <NavSidebar>
          <Route path='/home' exact component={DashboardPage} />
          <Route path='/artists' exact component={ArtistPage} />
          <Route path='/artists/add' exact component={AddArtistForm} />
          <Route path='/artists/detail/:id' exact component={ArtistDetails} />
          <Route
            path='/artists/detail/:id/pay'
            exact
            component={ArtistPayment}
          />
          <Route path='/employees' exact component={EmployeePage} />
          <Route path='/employees/add' exact component={AddEmployeeForm} />
          <Route
            path='/employees/detail/:id'
            exact
            component={EmployeeDetails}
          />
          <Route path='/users' exact component={UserPage} />
          <Route path='/payments' exact component={PaymentPage} />
        </NavSidebar>
      </Switch>
    </Router>
  );
};

export default App;
