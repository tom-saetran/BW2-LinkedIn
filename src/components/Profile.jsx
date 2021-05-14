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
    state = {
        data: null,
        exp: null
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        const id = this.props.match.params.id || (this.props.me && this.props.me._id)
        if (id && !this.state.data) this.setState({ data: await this.props.crud.user.get(id) })
        if (id && this.state.exp === null) this.setState({ exp: await this.props.crud.experiences.get(id) })
    }
    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                        <ProfileJumbotron me={this.props.me} data={this.state.data} exp={this.state.exp} />
                        <Dashboard data={this.state.data} />
                        <Activity data={this.state.data} />
                        <ExperienceEducation crud={this.props.crud} exp={this.state.exp} me={this.props.me} />
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
