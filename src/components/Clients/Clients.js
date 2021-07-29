import React from 'react'
import "./Clients.css"

const Clients = () => {
    return (
        <div>
            <div className="container py-3">
                <span>Clients</span>
                <div className="line mt-2"></div>
                <h2 className="mt-4">Big Deal <br /> With</h2>
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 me-3">
                        <div className="text-center">
                            <a href="#"><img src="/img/slack.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 me-3">
                        <div className="text-center">
                            <a href="#"><img src="/img/medium.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 me-3">
                        <div className="text-center">
                            <a href="#"><img src="/img/microsoft.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 me-3">
                        <div className="text-center">
                            <a href="#"><img src="/img/zeplin.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 me-3">
                        <div className="text-center">
                            <a href="#"><img src="/img/shopify.png" alt="" /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Clients
