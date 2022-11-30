import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
        <div className="fixed-bottom bg-dark text-white text-center py-2">
            Copyright ⓒ {year}
        </div>
    </>
  );
};

export default Footer;