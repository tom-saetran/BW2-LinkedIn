import React from "react"
import { Button, Card, Col, Container, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faPlayCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

library.add(faHome, faQuestionCircle, faLinkedin, faPlayCircle)

class FeedRight extends React.Component {
    state = {
        me: null,
        all: null,
        some: null
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
        if (this.state.some === null && this.state.all) this.setState({ some: this.some() })
    }

    some = () =>
        this.state.all
            .map(a => [a, Math.random()])
            .sort((a, b) => {
                return a[1] < b[1] ? -1 : 1
            })
            .slice(0, 5)
            .map(a => a[0])

    render() {
        return (
            <Row>
                <Col className="">
                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <div id="top-one">
                                        <h6 id="top-one-text" className="top-two-text-divider-two">
                                            <div className="d-flex" id="side-banner-two">
                                                <div> Add to your feed </div>
                                                <div id="question-mark-div" className="d-flex">
                                                    <FontAwesomeIcon id="question-mark-icon" icon="question-circle" />
                                                </div>
                                            </div>
                                        </h6>
                                    </div>
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Body id="generated-card">
                                                <Row className="flex-row">
                                                    <Col xs={4} id="card-img-column">
                                                        <Card.Img id="card-img" src="/img/LinkedIn.jpg" />
                                                    </Col>
                                                    <Col xs={8} id="card-column">
                                                        <Card.Title id="card-name" className="d-flex">
                                                            <div id="card-description-title">LinkedIn</div>
                                                        </Card.Title>
                                                        <Card.Text id="card-description-container">
                                                            <span id="card-description">Company · Internet</span>
                                                        </Card.Text>
                                                        <Button id="card-button">+ Follow</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Card id="side-card">
                                            <Card.Body id="generated-card">
                                                <Row className="flex-row">
                                                    <Col xs={4} id="card-img-column">
                                                        <Card.Img id="card-img" src="/img/borsen.png" />
                                                    </Col>
                                                    <Col xs={8} id="card-column">
                                                        <Card.Title id="card-name" className="d-flex">
                                                            <div id="card-description-title">Børsen</div>
                                                        </Card.Title>
                                                        <Card.Text id="card-description-container">
                                                            <span id="card-description">Company · Newspaper</span>
                                                        </Card.Text>
                                                        <Button id="card-button">+ Follow</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Card id="side-card">
                                            <Card.Body id="generated-card">
                                                <Row className="flex-row">
                                                    <Col xs={4} id="card-img-column">
                                                        <Card.Img id="card-img" src="/img/imb.jpg" />
                                                    </Col>
                                                    <Col xs={8} id="card-column">
                                                        <Card.Title id="card-name" className="d-flex">
                                                            <div id="card-description-title">IMB</div>
                                                        </Card.Title>
                                                        <Card.Text id="card-description-container">
                                                            <span id="card-description">Company · Info + Technology</span>
                                                        </Card.Text>
                                                        <Button id="card-button">+ Follow</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="View all recommendations">
                                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </ListGroup>
                            </div>
                        </div>
                    </div>

                    <div id="snc">
                        <ListGroup id="feed-table-right-two" className="d-flex-block">
                            <ListGroup.Item id="feed-table-right-title-item">
                                <h6 id="feed-table-right-title">Today's most viewed courses</h6>
                            </ListGroup.Item>
                            <ListGroup.Item id="feed-table-right-two-item">
                                <h6 id="feed-table-right-sub-title">1. Six Morning Habits of High Performers</h6>
                                <div id="feed-table-right-sub-string">Pete Mockaitis | How to Be Awesome at Your Job</div>
                            </ListGroup.Item>
                            <ListGroup.Item id="feed-table-right-two-item">
                                <h6 id="feed-table-right-sub-title">2. Executive Influence</h6>
                                <div id="feed-table-right-sub-string">John Ullmen</div>
                            </ListGroup.Item>
                            <ListGroup.Item id="feed-table-right-two-item">
                                <h6 id="feed-table-right-sub-title">3. Unconscious Bias</h6>
                                <div id="feed-table-right-sub-string">Stacey Gordon</div>
                            </ListGroup.Item>
                            <div id="divider-two"></div>
                            <Button className="no-shadow" variant="secondary-outline" id="sl-one-drop">Show More on LinkedIn Learning...</Button>

                        </ListGroup>
                    </div>
                    <div id="side-nav-main">
                        <ListGroup id="side-nav-container">
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    About
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    Help Center
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">

                                <DropdownButton id="side-nav-item" className="no-shadow" variant="secondary-outline" title="Privacy &amp; Terms">
                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>

                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    Accessibility
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    Ad Choices
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    Advertising
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">

                                <DropdownButton id="side-nav-item" className="no-shadow" variant="secondary-outline" title="Business Services">
                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>

                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    Get LinkedIn App
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-nav-item">
                                <a id="side-nav-a" href="/">
                                    More
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                        <Container id="footer-feed-container" className="d-flex">
                            <div id="feed-foot-one">
                                <div>Linked</div>
                            </div>
                            <FontAwesomeIcon size="2x" id="footer-title-icon-feed" icon={["fab", "linkedin"]} />
                            <div id="feed-foot-two">
                                Corporation © 2021</div>
                        </Container>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default FeedRight
