import React from 'react'
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className="back py-5">
            <div className="container back02">
                <span>Portfolio</span>
                <div className="line mt-2"></div>
                <h2 className="mt-4">All Creative <br /> Projects</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="/img/Rectang.png" className="w-100" alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="/img/Rectangle.png" className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
