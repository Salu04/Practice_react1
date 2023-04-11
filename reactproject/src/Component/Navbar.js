import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import '../Style/main.scss';
import { GlobalInfo } from '../App';

const Navbar = () => {
  const {logstatus} = useContext(GlobalInfo);
  return (
    <div className="navbar-class">
        <ul>
            <li >
                <Link to="/product" className="nvabar-text">Prodcuts</Link>
            </li>
            <li >
                <Link to="/about" className="nvabar-text">About</Link>
            </li>
            <li >
                <Link to="/contact" className="nvabar-text">Contact</Link>
            </li>
            <li style={{ display : logstatus ? "none" : "block" }}>
                <Link to="/login" className="nvabar-text">Login</Link>
            </li>
            <li style={{ display : logstatus ? "block" : "none" }}>
                <Link to="/login" className="nvabar-text">Logout</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
