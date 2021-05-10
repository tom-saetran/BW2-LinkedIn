import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProfileJumbotron from "./ProfileJumbotron"

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
                <Row>
                    <Col md={8}>
                        <ProfileJumbotron me={this.state.me} />
                    </Col>
                    <Col md={4}>{/* */}</Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
