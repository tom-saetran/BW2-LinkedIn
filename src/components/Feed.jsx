import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AddPost from "./AddPost"
import FeedItem from "./FeedItem"
import FeedLeft from "./FeedLeft"
import FeedRight from "./FeedRight"

class Feed extends React.Component {
    state = {
        feed: null
    }

    componentDidMount = async () => {
        this.setState({ feed: await this.props.crud.posts.getAll() })
    }

    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col md={3}>
                        <FeedLeft me={this.props.me} />
                    </Col>
                    <Col md={5}>
                        <Row className="g-0">
                            <AddPost crud={this.props.crud} />

                            <Col className="px-0 my-1" xs={12}>
                                <div className="d-flex alig">
                                    <hr className="flex-grow-1 m-auto me-2" style={{ color: "grey" }}></hr>
                                    <div className="d-flex align-items-center">
                                        <span>Sort by: </span> <strong className="ps-2"> Top</strong>
                                        <span className="dropdown-arrow dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" href="/"></span>
                                    </div>
                                </div>
                            </Col>
                            {this.state.feed &&
                                this.state.feed
                                    .slice(0)
                                    .reverse()
                                    .map((feed, index) => <FeedItem key={index} me={this.props.me} post={feed} />)}
                        </Row>
                    </Col>
                    <Col md={3}>
                        <FeedRight me={this.props.me} all={this.props.all} crud={this.props.crud} />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default Feed
