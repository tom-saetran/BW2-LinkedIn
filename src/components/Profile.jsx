import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Dashboard from "./Dashboard"
import ProfileJumbotron from "./ProfileJumbotron"
import Activity from "./Activity"
import ExperienceEducation from "./ExperienceEducation"
import Interests from "./Interests"
import "../assets/kai.css"

class Profile extends React.Component {
    state = {
        me: {},
        all: {}
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (_previousState.me !== this.state.me) this.setState({ me: this.props.me })
        if (_previousState.all !== this.state.all) this.setState({ all: this.props.all })
    }

    render() {
        return (
            <Container>
                <Row className="no-gutters">
                    <Col className="px-0" md={8}>
                        <ProfileJumbotron me={this.state.me} />
                        <Dashboard />
                        <Activity />
                        <ExperienceEducation />
                        <Interests />
                    </Col>
                    <Col md={4}>
                        {/* */}
                        <div>Hellow world lorem 500</div>
                    </Col>
                    <Col md={4}>{/* */}</Col>
                    <Col md={4}>{/* */}</Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
