import React from "react"
import { Row, Col, Spinner } from "react-bootstrap"

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Col className="section-inner mt-4 dashboard">
                    {this.props.data ? (
                        <>
                            {" "}
                            <Row>
                                <h5>Your Dashboard</h5>
                                <span className="text-muted">Private to you</span>
                            </Row>
                            <Row className="section-outer py-2 mt-2">
                                <Col md={4}>
                                    <h6>
                                        <a className="dash-stats" href="www.google.com">
                                            6
                                        </a>
                                    </h6>
                                    <span>Who viewed your profile</span>
                                </Col>
                                <Col className="mid-dash" md={4}>
                                    <h6>
                                        <a className="dash-stats" href="www.google.com">
                                            0
                                        </a>
                                    </h6>
                                    <span>Article views</span>
                                </Col>
                                <Col md={4}>
                                    <h6>
                                        <a className="dash-stats" href="www.google.com">
                                            1
                                        </a>
                                    </h6>
                                    <span>Search appearance</span>
                                </Col>
                            </Row>
                            <Row className="mt-3 py-3 section-outer">
                                <Col md={12}>
                                    <div className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                            <path d="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17H4zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z"></path>
                                        </svg>
                                        <div className="ms-2">
                                            <h5>Salary insights</h5>
                                            <p>See how your salary compares to others in the community</p>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col style={{position: "relative"}} md={12}>
                        <hr style={{position: "absolute", right: "0px", width: "90%",}}></hr>
                        </Col> */}

                                <hr></hr>
                                <Col md={12}>
                                    <div className=" d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                            <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                                        </svg>
                                        <div className="ms-2">
                                            <h5>My items</h5>
                                            <p>Keep track of your jobs, courses and articles</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <div className="p-5 text-center">
                            <Spinner variant="secondary" animation="border" />
                        </div>
                    )}
                </Col>
            </>
        )
    }
}

export default Dashboard
