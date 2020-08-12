import React from "react";
import {Nav, Navbar} from "react-bootstrap";
function Header(){
    return <header>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><h1>thuyyuht</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-dark">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    </header>
    
}

export default Header;