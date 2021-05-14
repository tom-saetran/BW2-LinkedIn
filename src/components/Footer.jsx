import React from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"

class Footer extends React.Component {
    render() {
        return (
            <>
            <Container className="mt-3 mt-md-auto">
                <Container className="p-0 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#0a66c2" viewBox="0 0 84 21" data-supported-dps="84x21"  width="84" height="21" focusable="false">
                    <g>
                        <path d="M12.5 2.75a1.75 1.75 0 101.8 1.75 1.75 1.75 0 00-1.8-1.75zM11 8h3v10h-3zM22.34 7.76A4.06 4.06 0 0019 9.39V8h-3v10h3v-5a2.31 2.31 0 012.16-2.48c1.1 0 1.84.82 1.84 2.44V18h3v-6.25c0-3.06-1.89-3.99-3.66-3.99zM82.5 0h-18A1.5 1.5 0 0063 1.5v18a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0082.5 0zM69 18h-3V8h3zM67.5 6.25a1.75 1.75 0 111.8-1.75 1.75 1.75 0 01-1.8 1.75zM81 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0074 13v5h-3V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4zM3 3H0v15h9v-3H3V3zM57 9a4.23 4.23 0 00-3.17-1.3A4.9 4.9 0 0049 12.94a5 5 0 004.87 5.36 3.78 3.78 0 003.31-1.61V18H60V3h-3zm-2.54 6.8A2.57 2.57 0 0151.9 13a2.55 2.55 0 012.56-2.8A2.63 2.63 0 0157.1 13a2.6 2.6 0 01-2.64 2.8zM38.04 8H34.4l-3.34 4.04H31V3h-3v15h3v-4.81h.06L34.48 18h3.75l-4.06-5.5L38.04 8z"></path>
                        <path d="M43.13 7.7A5 5 0 0038 12.87a5.11 5.11 0 005.24 5.43 5.5 5.5 0 004.39-1.94l-1.93-1.3a3.28 3.28 0 01-2.4 1 2.24 2.24 0 01-2.38-2V14h7v-.77C48 9.52 45.85 7.7 43.13 7.7zm-2.2 4.3a2.16 2.16 0 012.21-2.1 2 2 0 012 2.1z"></path>
                    </g>
                </svg>
                </Container>
                <Row>
                    <Col xs={12} md={2}>
                        <ul className="d-flex flex-column flex-start footer-list p-0">
                            <li className="list-item" style={{color:"#687888"}}><a>About</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Community Guidelines</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Privacy &amp; Terms</a> </li>
                            <li className="list-item" style={{color:"#687888"}}><a>Sales Solutions</a></li>
                            <li className="list-item" style={{color:"#687888"}}>Safety Center</li>
                        </ul>
                    </Col>
                    <Col xs={12}  md={2}>
                        <ul className="d-flex flex-column flex-start footer-list p-0">
                            <li className="list-item" style={{color:"#687888"}}><a>Accessibilty</a> </li>
                            <li className="list-item" style={{color:"#687888"}}><a>Careers</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Ad Choices</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Mobile</a></li>
                        </ul>
                    </Col>
                    <Col xs={12}  md={2}>
                        <ul className="d-flex flex-column flex-start footer-list p-0">
                            <li className="list-item" style={{color:"#687888"}}><a>Talent Solution</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Marketing Solutions</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Advertising</a></li>
                            <li className="list-item" style={{color:"#687888"}}><a>Small Business</a></li>
                        </ul>
                    </Col>
                    <Col xs={12}  md={3}>
                    <div className="d-flex flex-column footer-list p-0">
                        <div className="d-flex list-item">
                            <div class="me-3">
                                <svg style={{color:"#616160"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
                                </svg>
                            </div>

                            <div>
                            <h6 style={{color:"#56687a",fontSize:".85rem"}} className="mb-0">Questions?</h6>
                            <span><a style={{fontWeight:"normal"}}>Visit our help center</a></span>
                            </div>

                        </div> 

                        <div className="d-flex list-item">
                            <div className="me-3">
                                <svg  style={{color:"#616160"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                                </svg>
                            </div>

                            <div >
                            <h6  style={{color:"#56687a",fontSize:".85rem"}} className="mb-0 w-100">Manage your account and privacy</h6>
                            <p><a style={{fontWeight:"normal"}}>Visit our help center</a></p>
                            </div>
                        </div> 

                    </div>

                    </Col>
                    <Col xs={12}  md={3}>
                    <div className="d-flex flex-column flex-center footer-list p-0">
                        <div className="list-item">
                            <p className="mb-1" style={{color:"#687888"}}> Select Language</p>
                           
                            <Dropdown  className="d-flex"style={{borderRadius:"15px", }}>
                                <Dropdown.Toggle  className="w-100 flex-start"  style={{color:"#6f6e6d",background:"#f3f2ef",borderColor:"grey",textAlign:"left"}} variant="light" id="dropdown-basic">
                                    English (English)
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">العربية (Arabic)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> Čeština (Czech)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> Dansk (Danish) </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> Deutsch (German)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> English (English)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                         
                        </div> 
                        </div>      
                    </Col>  
                </Row>
                <Container className="p-0 mb-1">
                    <p style={{color:"#616160", fontSize:".8rem"}}>LinkedIn Corporation © 2021</p>
                </Container>
            </Container>
            </>
        )
    }
}

export default Footer
