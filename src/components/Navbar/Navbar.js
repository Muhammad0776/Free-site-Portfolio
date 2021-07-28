import { FaBars } from "react-icons/fa";
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="container py-3 d-flex justify-content-between">
                <div>
                    <img src="/img/logo.png" className="me-5" alt="" />
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <button className="btn"><FaBars /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
