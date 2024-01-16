// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import EditContent from './EditContent';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/edit">Edit Content</Link>
      {/* <PrivateRoute path="/dashboard/edit" component={EditContent} /> */}
    </div>
  );
};

export default Dashboard;
