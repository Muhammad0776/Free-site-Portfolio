import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="container py-4 text-center">
                <h2>Let’s be Friends</h2>
                <div className="d-flex justify-content-center mt-4">
                    <a href="#"><img src="/img/ball.png" className="pe-5" alt="not photo" /></a>
                    <a href="#"><img src="/img/instagram.png" className="pe-5" alt="not photo" /></a>
                    <a href="#"><img src="/img/in.png" alt="not photo" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
