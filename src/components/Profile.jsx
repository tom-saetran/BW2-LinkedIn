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
        user: null,
        exp: null
    }

    componentDidMount = async () => {
        if (this.props.match.params.id) this.setState({ user: await this.props.crud.profile.get(this.props.match.params.id) })
        else this.setState({ user: await this.props.crud.profile.get(this.props.me._id) })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (_previousProps.match.params.id !== this.props.match.params.id)
            this.setState({ user: await this.props.crud.profile.get(this.props.match.params.id) })
    }

    render() {
        return (
            <Container className="pt-5">
                <Row>
                    <Col md={{ span: 8, offset: 0 }}>
                        <ProfileJumbotron user={this.state.user} />
                        <Dashboard data={this.state.user} />
                        <Activity data={this.state.user} />
                        <ExperienceEducation crud={this.props.crud} user={this.state.user} />
                        <Interests />
                    </Col>
                    <Col md={4}>
                        <SideLoaderOne me={this.props.me} crud={this.props.crud} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Profile)
