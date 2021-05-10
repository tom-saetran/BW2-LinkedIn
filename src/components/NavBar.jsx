import React, { Component } from "react"
import { Container, Nav, Navbar, NavDropdown, Button, Form, FormControl, InputGroup } from "react-bootstrap"
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
                                <title>LinkedIn</title>
                                <g>
                                    <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" class="ml-auto">
                            <Nav>
                                <Form inline className="d-flex h-50 my-auto">
                                    <Button variant="outline-success" className="input-group-append">
                                        Search
                                    </Button>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <InputGroup className="mb-2"></InputGroup>
                                </Form>

                                <Nav.Link href="#home" className="d-md-flex flex-md-column ">
                                    <svg id="global-nav-icon--mercado__home--active" height="24" width="24">
                                        <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
                                        <path d="m20 2h-3v3.2l3 1.9z"></path>
                                    </svg>
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#link">My Network</Nav.Link>
                                <Nav.Link href="#link">Jobs</Nav.Link>
                                <Nav.Link href="#link">Messaging</Nav.Link>
                                <Nav.Link href="#link">Notifications</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown" placeholder="Me">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown" placeholder="Work">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
