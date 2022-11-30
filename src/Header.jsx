import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container className="text-center">
          <Navbar.Brand href="#">Keep Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
