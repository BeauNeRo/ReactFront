import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import logoimage from './main_logo.png';
import { NavLink } from 'react-router-dom';

const Navigation=()=> {
    return(
        <div className="Navigation">
            <Navbar bg="white" variant="light">
                <div className="container">
                    <div className="logo" href="#home">
                        <img src={logoimage} className="logo-image"/>
                    </div>
                    <Nav className="mr-auto">
                        <Nav.Link href="#company">COMPANY</Nav.Link>
                        <Nav.Link href="#shopping">SHOPPING</Nav.Link>
                        <Nav.Link href="#closet">CLOSET</Nav.Link>
                        <Nav.Link href="#fitting">FITTING</Nav.Link>
                        <Nav.Link href="#mypage">MYPAGE</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;