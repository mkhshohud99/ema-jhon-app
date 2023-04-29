import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { signOut } from 'firebase/auth';


const Header = () => {

    const {user , logOut } = useContext(AuthContext)
    const handleLogOut =() =>{
        logOut()
        .then(result => {})
        .catch(error => console.log(error));
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/orders">Order</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                {user && <span>Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span> }
            </div>
        </nav>
    );
};

export default Header;