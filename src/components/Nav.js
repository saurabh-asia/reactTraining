import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Nav = () => {
  const loginname = useSelector((state) => state.loginName);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({
      type:'delete'
    });
  }

  let menu;

  if(loginname===""){
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/login" className="nav-link active" href="#">Login</Link>
                </li>
      </ul>
    );
  }else{
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/login" className="nav-link active" href="#" onClick={logout}>Logout</Link>
                </li>
      </ul>
    );
  }

  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/about" className="navbar-brand">About</Link>
            <Link to="/register" className="navbar-brand">Register</Link>
            <div className="float-end">
              {menu}
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Nav