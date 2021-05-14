import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"

class FeedLeft extends React.Component {
    render() {
        return (
            <Row className="g-0">
                <Col xs={12} style={{ overflow: "hidden" }} className="mb-2 section-outer">
                    {this.props.me._id !== undefined ? (
                        <>
                            <div className="mb-5 banner-parent">
                                <img alt="" className="img-fluid" style={{ height: "100px", width: "100%" }} height="100px" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg"></img>
                                <img alt="" className="img-fluid img-overlay3" width="85px" src={this.props.me !== undefined ? this.props.me.image : ""} />
                            </div>
                            <div className="inner-small-items d-flex flex-column align-items-center">
                                <h5>{this.props.me.name + " " + this.props.me.surname}</h5>
                                <span>{this.props.me.bio}</span>
                            </div>
                            <hr className="m-0"></hr>
                            <div className="inner-small-items">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-muted">Connections</span>
                                    <svg className="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                        <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                    </svg>
                                </div>
                                <span>Grow your network</span>
                            </div>
                            <hr className="m-0"></hr>
                            <div className="d-flex align-items-center inner-small-items">
                                <svg className="xs-logo me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
                                    <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                                    <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                                </svg>
                                <span>See all premium features</span>
                            </div>
                            <hr className="m-0"></hr>
                            <div className="d-flex align-items-center inner-small-items">
                                <svg className="me-2 xs-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                    <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                                </svg>
                                <span>My items</span>
                            </div>
                        </>
                    ) : (
                        <div className="p-5 text-center">
                            <Spinner variant="secondary" animation="border" />
                        </div>
                    )}
                </Col>
                <Col xs={12} className="section-outer">
                    <div className="inner-small-items">
                        <h6>Recent</h6>
                        <div className="mt-1 d-flex align-items-center">
                            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                <circle cx="8" cy="4" r="2"></circle>
                                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                <circle cx="3.5" cy="5.5" r="1.5"></circle>
                            </svg>
                            <span className="mt-1 text-muted">Premium Career Group</span>
                        </div>
                        <h6 className="mt-4">
                            <a style={{ textDecoration: "none" }} href="/">
                                Groups
                            </a>
                        </h6>
                        <div className="d-flex">
                            <svg className="me-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                <circle cx="8" cy="4" r="2"></circle>
                                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                <circle cx="3.5" cy="5.5" r="1.5"></circle>
                            </svg>
                            <div className="d-flex flex-column">
                                <span className="text-muted">Premium Career Group</span>
                                <span className="mt-1 text-muted">See all</span>
                            </div>
                        </div>

                        <div className="mt-4 d-flex align-items-center justify-content-between">
                            <h6 className="py-1 mb-0">
                                <a style={{ textDecoration: "none" }} href="/">
                                    Events
                                </a>
                            </h6>
                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                            </svg>
                        </div>
                        <h6 className="py-1 mt-1 mb-0">
                            <a style={{ textDecoration: "none" }} href="/">
                                Followed Hashtags
                            </a>
                        </h6>
                    </div>

                    <hr className="m-0"></hr>
                    <div className="d-flex justify-content-center inner-small-items">
                        <span className="text-muted">Discover More</span>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default FeedLeft
