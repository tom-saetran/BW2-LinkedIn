import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Dashboard from "./Dashboard"
import ProfileJumbotron from "./ProfileJumbotron"
import Activity from "./Activity"
import ExperienceEducation from "./ExperienceEducation"
import Interests from "./Interests"
import "../assets/kai.css"
import SideLoaderOne from "./SideLoaderOne"
import { withRouter } from "react-router"

class Profile extends React.Component {
    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                        <ProfileJumbotron crud={this.props.crud} me={this.props.me} />
                        <Dashboard />
                        <Activity />
                        <ExperienceEducation crud={this.props.crud} exp={this.props.exp} me={this.props.me} />
                        <Interests />
                    </Col>
                    <Col md={3}>
                        <SideLoaderOne crud={this.props.crud} me={this.props.me} all={this.props.all} />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Profile)
