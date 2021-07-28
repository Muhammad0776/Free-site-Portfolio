import React from 'react'
import { Button } from 'reactstrap';
import "./Header.css"

function Header() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="mt-5 pt-5">
                            <p className="style">Hello,</p>
                            <h1>Adam Zakob</h1>
                            <p className="style">a freelance UX Designer</p>
                            <Button className="btn mt-4">Let’s Talk</Button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="back-color">
                            <img src="/img/user-img.png" className="w-75" alt="Not photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
