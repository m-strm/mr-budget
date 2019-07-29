import React from "react";
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Mr.Budget</h1>
    <Link to="/">Home</Link>
    <Link to="/create">Add Expense</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </header>
);

export default Header;
