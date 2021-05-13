import React from "react"
import { Badge, Button, Card, Col, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown, Jumbotron, ListGroup, Row } from 'react-bootstrap'
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
            <Row >
                <Col className="">
                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <div >Add to your feed</div>
                                            </Card.Header>
                                            {this.state.some !== null && this.state.some.map(person => {
                                                return (
                                                    <Card.Body id="generated-card" key={person._id}>
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
                                                                    <p id="card-description">{person.title}</p>

                                                                </Card.Text>
                                                                <Button id="card-button">
                                                                    + Follow
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>)
                                            })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="View all recommendations -->">
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
                    <div id="feed-table-right">
                        <div id="feed-table-right-title">title</div>
                        <div>
                            <div id="feed-table-right-sub-title">title</div>
                            <div id="feed-table-right-sub-string">substring</div>
                        </div>
                        <div>
                            <div id="feed-table-right-sub-title">title</div>
                            <div id="feed-table-right-sub-string">substring</div>
                        </div>
                        <div>
                            <div id="feed-table-right-sub-title">title</div>
                            <div id="feed-table-right-sub-string">substring</div>
                        </div>
                        <div>
                            hello i wil be button
                        </div>
                    </div>

                    <div classname="d-flex">
                        <Navbar bg="light" expand="lg">

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>

                                </Nav>

                            </Navbar.Collapse><div><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></div>
                        </Navbar>
                    </div>
                </Col>

            </Row >

        )
    }
}

export default FeedRight