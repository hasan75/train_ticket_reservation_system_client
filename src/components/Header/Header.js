import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import headerStyle from './Header.module.css';

const Header = () => {
  return (
    <Navbar
      className={headerStyle.headerNav}
      expand='lg'
      variant='light'
      bg='white'
      fixed='top'
    >
      <Container>
        <Navbar.Brand className='fw-bold ms-auto me-auto'>
          Train Ticket Reservation System
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
