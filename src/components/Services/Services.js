import React from 'react'
import "./Services.css";

// let service = [
//     {
//         title: "UX Research",
//         subtitle: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
//     },
//     {
//         title: "Brand Design",
//         subtitle: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
//     },
//     {
//         title: "Web Development",
//         subtitle: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
//     },
// ]

const Services = () => {
    return (
        <div>
            <div className="container py-5">
                <span>Services</span>
                <div className="line mt-2"></div>
                <h2 className="mt-4">What  actually <br /> I love to do</h2>
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex my-3 pt-5">
                            <img src="/img/phone.png" alt="" />
                            <h4 className="d-flex justify-content-center align-items-center ms-3">UX Research</h4>
                        </div>
                        <p>New demos are continually added and buying a single license for Mak gives you access to all of
                            what's shown below, plus everything that will be added in the future.</p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex my-3 pt-5">
                            <img src="/img/wifi.png" alt="" />
                            <h4 className="d-flex justify-content-center align-items-center ms-3">UX Research</h4>
                        </div>
                        <p>New demos are continually added and buying a single license for Mak gives you access to all of
                            what's shown below, plus everything that will be added in the future.</p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex my-3 pt-5">
                            <img src="/img/tab.png" alt="" />
                            <h4 className="d-flex justify-content-center align-items-center ms-3">UX Research</h4>
                        </div>
                        <p>New demos are continually added and buying a single license for Mak gives you access to all of
                            what's shown below, plus everything that will be added in the future.</p>
                    </div>

                    {/* {service.map((val, ind) => {
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="d-flex">
                                <img src="/img/phone.png" alt="" />
                                ${val.title}
                            </div>
                            ${val.subtitle}
                        </div>
                    })} */}

                </div>
            </div>
        </div>
    )
}

export default Services
