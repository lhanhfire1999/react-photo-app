import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <NavLink
              exact
              className='header__title header__link'
              to='/photo'
              activeClassName='header__link--active'
            >
              Photo Todo
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>

  );
}

export default Header;