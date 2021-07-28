import { FaBars } from "react-icons/fa";
import "./Navbar.css"
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="container py-3 bg-white d-flex justify-content-between" color="light" light expand="md">
                <NavbarBrand href="/"><img src="/img/logo.png" className="me-5" alt="" /></NavbarBrand>
                <NavbarToggler className="but" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Works</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarText className="d-lg-block d-none"><button className="but shadow bg-white border-0"><FaBars /></button></NavbarText>
            </Navbar>
        </div>
    );
}

export default Example;
