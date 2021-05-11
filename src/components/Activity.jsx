import React from "react"
import { Button, Col } from "react-bootstrap"


class Activity extends React.Component {

    render() {
        return (
            <>
                <Col className="mt-4 mb-4 section-outer section-inner">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>Acitivity</h5>
                        </div>
                        <h6 className="text-muted">Start a post</h6>
                    </div>
                    <span className="text-muted">1 follower</span>
                    <div className="my-2">
                        <p>Posts Kaiwan  created, shared, or commented on in the last 90 days are displayed here.</p>
                    </div>
                    <div>
                        <hr></hr>
                        <h6 className="text-center">See all acitivity</h6>
                    </div>
                </Col>
            </>
        )
    }
}

export default Activity