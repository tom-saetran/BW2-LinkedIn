import React from "react"
import { Container, Row, Col} from "react-bootstrap"
import Dashboard from "./Dashboard"
import ProfileJumbotron from "./ProfileJumbotron"
import Activity from "./Activity"
import ExperienceEducation from "./ExperienceEducation"
import Interests from "./Interests"

class Profile extends React.Component {
    state = {
        me: {},
        all: {}
    }

    componentDidMount = async () => {
        this.setState({ me: await this.props.me })
        this.setState({ all: await this.props.all })
    }

    render() {
        return (
            <Container>
                <Row className="no-gutters">
                    <Col md={8}>
                        <ProfileJumbotron me={this.state.me}/>
                        <Dashboard/>
                        <Activity/>
                        <ExperienceEducation/>
                        <Interests/>
                    </Col>
                    <Col md={4}>
                        {/* */}
                    </Col>
                    <Col md={4}>{/* */}</Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
