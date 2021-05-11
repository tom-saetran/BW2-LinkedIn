import { Badge, Button, Card, Col, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Jumbotron, ListGroup, Row } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

library.add(faHome, faQuestionCircle, faLinkedin)

class SideLoaderOne extends React.Component {
    state = {
        me: null,
        all: null,
        some: null
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
        if (this.state.some === null && this.state.all !== null) this.setState({ some: this.some() })
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
        return (
            this.state.me !== null && (
                <Col xs="12">
                    <div id="top-two">
                        <h6 id="top-two-text" className="top-two-text-divider">
                            Edit public profile &amp; URL <sup><FontAwesomeIcon icon="question-circle" /></sup>
                        </h6>
                    </div>
                    <div id="divider"></div>
                    <div id="top-two">
                        <h6 id="top-two-text">
                            Add profile in another language <sup><FontAwesomeIcon icon="question-circle" /></sup>
                        </h6>

                    </div>

                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <h2  >People also viewed</h2>
                                            </Card.Header>
                                            {this.state.some !== null && this.state.some.map(person => {
                                                return (
                                                    <Card.Body id="generated-card" key={person._id}>
                                                        <Row className="flex-row">
                                                            <Col xs={4} id="card-img-column">
                                                                <Card.Img id="card-img" src={person.image} />
                                                            </Col>
                                                            <Col xs={8} id="card-column">
                                                                <Card.Title id="card-name">

                                                                    {person.name}<span id="person-title"> : {person.title}</span>
                                                                </Card.Title>
                                                                <Card.Text>

                                                                    <div id="card-description">{person.area}</div>
                                                                </Card.Text>
                                                                <Button id="card-button">
                                                                    Connect
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>)
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


                    <div id="SideLoaderOneContainer" >
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <h2>People you may know</h2>
                                            </Card.Header>
                                            {this.state.some !== null && this.state.some.map(person => {
                                                return (
                                                    <Card.Body id="generated-card" key={person._id}>
                                                        <Row className="flex-row">
                                                            <Col xs={4} id="card-img-column">
                                                                <Card.Img id="card-img" src={person.image} />
                                                            </Col>
                                                            <Col xs={8} id="card-column">
                                                                <Card.Title>

                                                                    {person.name}<span id="person-title"> : {person.title}</span>
                                                                </Card.Title>
                                                                <Card.Text>

                                                                    <div id="card-description">{person.area}</div>
                                                                </Card.Text>
                                                                <Button id="card-button">
                                                                    Connect
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>)
                                            })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton variant="outline-secondary" style={{ boxShadow: "none !important" }} id="sl-one-drop" title="Show more">
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


                    <div >
                        <ListGroup id="side-loader-youtube">
                            <ListGroup.Item id="footer-title"><FontAwesomeIcon size="2x" id="footer-title-icon" icon={["fab", "linkedin"]} />LEARNING</ListGroup.Item>
                            <ListGroup.Item id="footer-sub-title">Add new skills with these courses</ListGroup.Item>
                            <ListGroup.Item>
                                <Container id="youtube-card">
                                    <Row>
                                        <Col xs="4" id="youtube-image">
                                            <img id="pickme"></img>
                                        </Col>
                                        <Col xs="8" id="youtube-text">
                                            <h2>Cybersecurity for Executives</h2>
                                            <span>22, 331 views</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col xs="4">
                                            <img id="pickme"></img>
                                        </Col>
                                        <Col xs="8">
                                            <h2>Cybersecurity for Executives</h2>
                                            <span>22, 331 views</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col xs="4">
                                            <img id="pickme"></img>
                                        </Col>
                                        <Col xs="8">
                                            <h2>Cybersecurity for Executives</h2>
                                            <span>22, 331 views</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                            <ListGroup.Item id="side-loader-footer">Show more on LinkedIn Learning</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>

            )
        )
    }
}

export default SideLoaderOne
