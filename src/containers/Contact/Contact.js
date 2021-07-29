import React from 'react'
import { FaPaperclip, FaLongArrowAltRight } from "react-icons/fa";
import { Button } from 'reactstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className="container py-5">
                <span>Contact Me</span>
                <div className="line mt-2"></div>
                <div className="d-flex justify-content-between">
                    <h2 className="mt-4">Let me know if you want to talk <br /> about a potential collaboration. <br /> I'm available for freelance work.</h2>
                    <a href="#" className="mt-3 d-lg-block d-none">infoname@mail.com</a>
                </div>
                <input type="text" className="border-0 mb-4 form-control border-bottom" placeholder="What’s your name?" />
                <input type="text" className="border-0 mb-4 form-control border-bottom" placeholder="Your email" />
                <input type="text" className="border-0 mb-4 form-control border-bottom" placeholder="Tell me about your project" />
                <div className="d-flex justify-content-between">
                    <Button className="btn">Get a Quote</Button>
                    <div className="d-flex">
                        <a href="#" className="icon"><FaPaperclip className="me-3 text-dark" /></a>
                        <a href="#" className="icon"><FaLongArrowAltRight className="text-dark" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
