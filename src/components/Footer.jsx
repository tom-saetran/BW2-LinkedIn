import React from "react"
import {Container, Row, Col} from "react-bootstrap"


class Footer extends React.Component {


    render() {

        return (
            <Container>
                <Row>
                    <Col xs={2}>
                    <ul className="d-flex flex-column flex-start footer-list">
                    <li>About</li>
                    <li>Community Guidelines</li>
                     <li>Privacy & Terms </li>
                     <li>Sales Solutions</li>
                     <li>Safety Center</li>
                    </ul>

                    </Col>
                    <Col xs={2}>
                        <ul className="d-flex flex-column flex-start footer-list">
                        <li>Accessibilty </li>
                        <li>Careers</li>
                        <li>Ad Choices</li>
                        <li>Mobile</li>
                        
                        </ul>
                    </Col>
                    <Col xs={2}>
                    <ul className="d-flex flex-column flex-start footer-list">
                        <li>Talent Solution</li>
                        <li>Marketing Solutions</li>
                        <li>Advertising</li>
                        <li>Small Business</li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                    <ul className="d-flex flex-column flex-start footer-list">
                        <li className="d-flex">
                            <li>Questions?</li>
                            <li></li>
                        </li>

                        <li>Marketing Solutions</li>
                    </ul>

                        
                    </Col>
                    <Col xs={3}>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer 
