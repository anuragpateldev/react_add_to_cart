import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { MdLocalOffer } from "react-icons/md";
import './TopBar.css';

const TopBar = () =>{
    return (
        <Navbar bg="light" expand="lg">
            <Container className='ap__container'>
                <div className='left__container'>
                    <h6 className='text-dark'>
                        <MdLocalOffer/>
                        Free Home Delivery on Order Above 500/- Rupees
                    </h6>
                </div>
                <div className='right__container'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default TopBar;