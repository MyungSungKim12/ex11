import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';
import back from '../images/back.jpg';

const Header = ({history}) => {
  let email = sessionStorage.getItem('email');
  const onLogout = (e) =>{
    e.preventDefault();
    sessionStorage.removeItem('email');
    history.push('/');
  }
  return (
    <>
      <br />
      <img src={back} style={{ width: '100%' }} />
      <Navbar bg="primary" variant="dark">
        
          <Navbar.Brand href="/">𖠌</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="#features">회원목록</Nav.Link>
            {email ?
              <Nav.Link href="#" onClick={onLogout}>로그아웃</Nav.Link>
              :
              <Nav.Link href="/login">로그인</Nav.Link>
            }
            {email &&
              <Nav.Link href="/login">{email}</Nav.Link>
            }

          </Nav>
        
      </Navbar>
      <br />
    </>
  )
}

export default withRouter (Header)