import { Badge, Button, Card, Col, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Jumbotron, ListGroup, Row } from 'react-bootstrap'

const SideLoaderOne = () => (
    <Container>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Navbar
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">
                    Home
                </Nav.Link>
                <Nav.Link href="#features">
                    Features
                </Nav.Link>
                <Nav.Link href="#pricing">
                    Pricing
                </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">
                    Search
                </Button>
            </Form>
        </Navbar>

        <Row>
            <Col>
                <Container >
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                        <Container>
                            <Card id="side-card" style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Row><Col>
                                        <Card.Img xs="4" variant="top" src="https://www.pngrepo.com/png/93140/180/profile-user.png" /></Col>
                                        <Col xs="8"><Card.Title>
                                            Kevin Menses
                                    </Card.Title>
                                            <Card.Text>

                                                <p id="card-description">student at university of rochester</p>
                                            </Card.Text>
                                            <Button id="card-button">
                                                Connect
                                    </Button></Col></Row>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Jumbotron>
                </Container>
            </Col>
            <Col xs="4">
                <Container>
                    <h6>
                        Edit <Badge variant="secondary">New</Badge>
                    </h6>
                    <h6>
                        Example heading <Badge variant="secondary">New</Badge>
                    </h6>
                </Container>
                <Container id="SideLoaderTwo" >
                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderTwoImage">
                            <ListGroup>
                                <ListGroup.Item id="SideLoaderTwoItem">
                                    <Card id="side-card">
                                        <Card.Header id="side-card-title">
                                            <h2>People also viewed</h2>
                                        </Card.Header>
                                        <Card.Body>
                                            <Row class="flex-row">
                                                <Col xs={4} className="">
                                                    <Card.Img variant="top" src="https://www.pngrepo.com/png/93140/180/profile-user.png" />
                                                </Col>
                                                <Col xs={8}>
                                                    <Card.Title>
                                                        Kevin Menses
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p id="card-description">student at university of rochester</p>
                                                    </Card.Text>
                                                    <Button id="card-button">
                                                        Connect
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Footer>

                                        </Card.Footer>
                                    </Card>
                                </ListGroup.Item>
                                <div>
                                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </ListGroup>
                        </div>
                    </div>
                </Container>
                <Container id="SideLoaderOne" >
                    <div id="SideLoaderOneContainer">
                        <ListGroup id="SideLoaderOneGroup">
                            <ListGroup.Item id="SideLoaderOneItem">
                                <p id="SideLoaderOneHeader">
                                    People also viewed
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item id="SideLoaderOneItem">
                                <image src="https://www.pngrepo.com/png/93140/180/profile-user.png" alt="Girl in a jacket" width="50" height="60"></image>
                                    Cras justo odio
                                <Button id="SideLoaderButton" variant="outline-secondary">Secondary</Button>
                            </ListGroup.Item>
                            <ListGroup.Item id="SideLoaderOneItem">
                                Cras justo odio
                                <Button id="SideLoaderButton" variant="outline-secondary">Secondary</Button>
                            </ListGroup.Item>
                            <ListGroup.Item id="SideLoaderOneItem">
                                Cras justo odio
                                <Button id="SideLoaderButton" variant="outline-secondary">Secondary</Button>
                            </ListGroup.Item>
                            <ListGroup.Item id="SideLoaderOneItem">
                                Cras justo odio
                                <Button id="SideLoaderButton" variant="outline-secondary">Secondary</Button>
                            </ListGroup.Item>
                            <ListGroup.Item id="SideLoaderOneItem">
                                Cras justo odio
                                <Button id="SideLoaderButton" variant="outline-secondary">Secondary</Button>
                            </ListGroup.Item>
                            <DropdownButton id="dropdown-item-button-one" title="Dropdown button">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </ListGroup>
                    </div>
                </Container>
                <Container>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Col>
        </Row>

    </Container>
)


export default SideLoaderOne