import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AddPost from "./AddPost"
import FeedItem from "./FeedItem"
import FeedLeft from "./FeedLeft"

class Feed extends React.Component {
    render() {
        return (
            <Container className="pt-5">
                <Row>

                    <Col md={3}>
                    <FeedLeft/>
                    </Col>
                    <Col md={6}>
                        <Row className="g-0">
                            <AddPost crud={this.props.crud} />

                            <Col className="px-0 my-1" xs={12}>
                                <div className="d-flex alig">
                                    <hr className="flex-grow-1 m-auto me-2" style={{ color: "grey" }}></hr>
                                    <div className="d-flex align-items-center">
                                        <span>Sort by: </span> <strong className="ps-2"> Top</strong>
                                        <a className="dropdown-arrow dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" href="#"></a>
 
                                    </div>
                                </div>
                            </Col>
                            <FeedItem crud={this.props.crud} />
                            <FeedItem />
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default Feed
