import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, withRouter } from 'react-router-dom';
import back from '../images/back.jpg';

const Header = ({ history }) => {
  let email = sessionStorage.getItem('email');
  const onLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('email');
    history.push('/');
  }
  return (
    <>
      <br />
      <img src={back} style={{ width: '100%' }} />
      <Navbar bg="primary" variant="dark" className='header'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">UserList</NavLink>
        {email ?
          <NavLink to="#" onClick={onLogout}>Logout</NavLink>
          :
          <NavLink to="/login">Login</NavLink>
        }
        {email && <span style={{ color: 'white' }}>{email}</span>}
      </Navbar>
      <br />
    </>
  )
}

export default withRouter(Header)