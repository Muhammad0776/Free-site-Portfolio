import React from 'react'
import "./Blog.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Blog = () => {
    return (
        <div id="blog">
            <div className="container py-5 d-flex">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 pe-0">
                        <div>
                            <span>Blog</span>
                            <div className="line mt-2"></div>
                            <h2 className="mt-4">Big Deal <br /> With</h2>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 ps-0">
                        <div>
                            <Card className="border-0 pb-3">
                                <CardImg top width="100%" src="/img/img1.png" alt="Card image cap" />
                                <CardBody className="px-0">
                                    <CardSubtitle tag="h6" className="mb-2 text-primary">20 June/2020</CardSubtitle>
                                    <CardText className="fw-bold">Technology is evolving rapidly. New <br /> devices and applications.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 pe-3">
                        <div>
                            <img src="/img/img2.png" className="w-100 mb-3" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 pe-3">
                        <div>
                            <img src="/img/img3.png" className="w-100 mb-3" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
