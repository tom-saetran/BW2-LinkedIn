import React from "react"
import { Card, Spinner } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
import uniqid from "uniqid"

class Neighbourhood extends React.Component {
    state = {
        users: null,
        mayKnow: null
    }

    componentDidMount = async () => {
        this.setState({ users: await this.props.crud.profile.getAll() })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.state.mayKnow === null && this.state.users) this.setState({ mayKnow: this.some() })
        if (_previousProps.match.params.id !== this.props.match.params.id) this.setState({ mayKnow: this.some() })
    }

    some = () =>
        this.state.users.result
            .map(a => [a, Math.random()])
            .sort((a, b) => {
                return a[1] < b[1] ? -1 : 1
            })
            .slice(0, 3 + Math.random() * 3)
            .map(a => a[0])

    render() {
        return this.state.users && this.props.user && this.state.mayKnow ? (
            <Card className="text-dim">
                <Card.Header className="text-center py-1 bg-white">People you may know</Card.Header>
                <Card.Body>
                    {this.state.mayKnow
                        .filter(user => user._id !== this.props.user._id && user._id !== this.props.match.params.id)
                        .map(user => {
                            return (
                                <div key={user._id}>
                                    <Card.Title as={"h6"}>
                                        <Link className="link" to={"/profile/" + user._id}>
                                            <Card.Img className="friend-avatar" alt="" src={user.image} />
                                        </Link>
                                        <Link className="link" to={"/profile/" + user._id}>
                                            {user.name} {user.surname}
                                        </Link>
                                    </Card.Title>
                                    <Card.Text className="text-truncate">
                                        <span title={user.bio}>{user.bio}</span>
                                    </Card.Text>
                                </div>
                            )
                        })
                        .reduce((prev, curr) => [prev, <hr key={uniqid()} />, curr])}
                </Card.Body>
                <Card.Footer className="text-center py-1 bg-white">
                    <Link className="link" to="/">
                        See more results
                    </Link>
                </Card.Footer>
            </Card>
        ) : (
            <Card className="text-dim text-center">
                <Card.Body>
                    <Spinner className="spinner" animation="border" />
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(Neighbourhood)
