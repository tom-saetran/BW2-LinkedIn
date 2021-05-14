import { Button, Card, Col, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faPlayCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link, NavLink, withRouter } from "react-router-dom"

library.add(faHome, faQuestionCircle, faLinkedin, faPlayCircle)

class SideLoaderOne extends React.Component {
    state = {
        me: null,
        all: null,
        mayKnow: null,
        alsoViewed: null
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
        if (this.state.mayKnow === null && this.state.all !== null) this.setState({ mayKnow: this.some() })
        if (this.state.alsoViewed === null && this.state.all !== null) this.setState({ alsoViewed: this.some() })
    }

    //  const noInfo = []
    // if (this.state.some !== undefined){
    //    continue
    //} else{
    //    noInfo.push(this.state.some)
    // }
    //

    some = () =>
        this.state.all
            .map(a => [a, Math.random()])
            .sort((a, b) => {
                return a[1] < b[1] ? -1 : 1
            })
            .slice(0, 5)
            .map(a => a[0])

    render() {
        //console.log(this.state.all)
        return (
            this.state.me !== null && (
                <Col xs="12">
                    <div id="top-two">
                        <h6 id="top-two-text" className="top-two-text-divider">
                            <div className="d-flex" id="side-banner">
                                <div>Edit public profile &amp; URL </div>
                                <div id="question-mark-div" className="d-flex">
                                    <FontAwesomeIcon id="question-mark-icon" icon="question-circle" />
                                </div>
                            </div>
                        </h6>
                    </div>
                    <div id="divider"></div>
                    <div id="top-two">
                        <h6 id="top-two-text" className="top-two-text-divider">
                            <div className="d-flex" id="side-banner">
                                <div>Add profile in another language</div>
                                <div id="question-mark-div">
                                    <FontAwesomeIcon id="question-mark-icon" icon="question-circle" />
                                </div>
                            </div>
                        </h6>
                    </div>

                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <div>People also viewed</div>
                                            </Card.Header>
                                            {this.state.alsoViewed !== null &&
                                                this.state.alsoViewed.map(person => {
                                                    return (
                                                        <Card.Body id="generated-card" key={person._id}>
                                                            <NavLink className="no-underline link-dim" to={"/profile/" + person._id}>
                                                                <Row className="flex-row">
                                                                    <Col xs={4} id="card-img-column">
                                                                        <Card.Img id="card-img" src={person.image} />
                                                                    </Col>
                                                                    <Col xs={8} id="card-column">
                                                                        <Card.Title id="card-name" className="d-flex">
                                                                            <div id="card-description-title-one">{person.name}</div>
                                                                            <div id="third">3rd+</div>
                                                                        </Card.Title>
                                                                        <Card.Text id="card-description-container">
                                                                            <span id="card-description">{person.title}</span>
                                                                        </Card.Text>
                                                                        <Button id="card-button">Connect</Button>
                                                                    </Col>
                                                                </Row>
                                                            </NavLink>
                                                        </Card.Body>
                                                    )
                                                })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="Show more">
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

                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <div>People you may know</div>
                                            </Card.Header>
                                            {this.state.mayKnow !== null &&
                                                this.state.mayKnow.map(person => {
                                                    return (
                                                        <Card.Body id="generated-card" key={person._id}>
                                                            <Row className="flex-row">
                                                                <Col xs={4} id="card-img-column">
                                                                    <Card.Img id="card-img" src={person.image} />
                                                                </Col>
                                                                <Col xs={8} id="card-column">
                                                                    <Card.Title id="card-name">
                                                                        <span id="card-description-title">{person.name}</span>
                                                                    </Card.Title>
                                                                    <Card.Text id="card-description-container">
                                                                        <span id="card-description">{person.title}</span>
                                                                    </Card.Text>
                                                                    <Button id="card-button">Connect</Button>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    )
                                                })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="Show more">
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

                    <div id="SLYT">
                        <ListGroup id="side-loader-youtube">
                            <ListGroup.Item id="footer-title">
                                <FontAwesomeIcon size="2x" id="footer-title-icon" icon={["fab", "linkedin"]} />
                                <span>LEARNING</span>
                            </ListGroup.Item>
                            <ListGroup.Item id="sl-youtube-sub-title-container">
                                <p id="sl-youtube-sub-title"> Add new skills with these courses</p>
                            </ListGroup.Item>
                            <ListGroup.Item id="youtube-card">
                                <Row>
                                    <Col xs="4" id="youtube-image">
                                        <img alt="" id="pickme" src="/img/cfe.jpg"></img>
                                    </Col>
                                    <Col xs="8" id="youtube-text">
                                        <h6 id="yt-text-title">Cybersecurity for Executives</h6>
                                        <span id="yt-view-count">22,331 views</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item id="youtube-card">
                                <Row>
                                    <Col xs="4" id="youtube-image">
                                        <img alt="" id="pickme" src="/img/cacsi.jpg"></img>
                                    </Col>
                                    <Col xs="8" id="youtube-text">
                                        <h6 id="yt-text-title">Communicating about Culturally Sensitive Issues</h6>
                                        <span id="yt-view-count">247,691 views</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item id="youtube-card">
                                <Row>
                                    <Col xs="4" id="youtube-image">
                                        <img alt="" id="pickme" src="/img/eet.jpg"></img>
                                    </Col>
                                    <Col xs="8" id="youtube-text">
                                        <h6 id="yt-text-title">Excel Essential Training (Office 365/Microsoft 365)</h6>
                                        <span id="yt-view-count">745,856 views</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item id="side-loader-footer">
                                <span href="">Show more on LinkedIn Learning</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            )
        )
    }
}

export default withRouter(SideLoaderOne)
