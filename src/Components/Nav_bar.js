import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Nav_bar.css'



function Nav_bar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">YOURDAILY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='link_container'>
            <Link to={"/"} className="link">Home</Link>
            <Link to={"/news"} className="link">News</Link>
            <Link to={"/buy&sell"} className="link" >Buy&Sell</Link>
            <Link to={"/movies"} className="link">Movies</Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <Link className="link" >Action</Link><br/>
              <Link className="link">Another action </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{color : "green"}}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
          <Form className="d-flex">
          <Button variant="outline-success">Search</Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button className='btn' variant="outline-success">Sign Up</Button>
          <Button className='btn' variant="outline-success">Log In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nav_bar