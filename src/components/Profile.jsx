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

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
        if (this.state.data === null) this.setState({ data: await this.props.crud.user.get("6098ebe0619e5d00151f8f7b") })
    }

    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                        <ProfileJumbotron crud={this.props.crud} me={this.state.me} />
                        <Dashboard />
                        <Activity />
                        <ExperienceEducation crud={this.props.crud} exp={this.props.exp} me={this.state.me} />
                        <Interests />
                    </Col>
                    <Col md={3}>
                        <SideLoaderOne crud={this.props.crud} me={this.state.me} all={this.state.all} />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
