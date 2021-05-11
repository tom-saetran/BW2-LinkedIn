import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Dashboard from "./Dashboard"
import ProfileJumbotron from "./ProfileJumbotron"
import Activity from "./Activity"
import ExperienceEducation from "./ExperienceEducation"
import Interests from "./Interests"
import "../assets/kai.css"
import SideLoaderOne from "./SideLoaderOne"

class Profile extends React.Component {
    state = {
        me: null,
        all: null
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
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
                        <SideLoaderOne me={this.state.me} all={this.state.all}/>
                    </Col>
                    <Col md={4}>{/* */}</Col>
                    <Col md={4}>{/* */}</Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
