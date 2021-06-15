import { Button, Card, Col, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faPlayCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavLink, withRouter } from "react-router-dom"

library.add(faHome, faQuestionCircle, faLinkedin, faPlayCircle)

class SideLoaderOne extends React.Component {
    state = {
        me: null,
        all: null,
        mayKnow: null,
        alsoViewed: null
    }

    componentDidMount = async () => {
        this.setState({ all: await this.props.crud.profile.getAll() })
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.state.mayKnow === null && this.state.all !== null) this.setState({ mayKnow: this.some() })
        if (this.state.alsoViewed === null && this.state.all !== null) this.setState({ alsoViewed: this.some() })
        if (_previousProps.match.params.id !== this.props.match.params.id) this.setState({ mayKnow: this.some(), alsoViewed: this.some() })
    }

    //  const noInfo = []
    // if (this.state.some !== undefined){
    //    continue
    //} else{
    //    noInfo.push(this.state.some)
    // }
    //

    some = () =>
        this.state.all.result
            .map(a => [a, Math.random()])
            .sort((a, b) => {
                return a[1] < b[1] ? -1 : 1
            })
            .slice(0, 5)
            .map(a => a[0])

    render() {
        //console.log(this.state.all)
        return (
            this.state.me !== null && (
                <Col xs="12">
                    <div id="top-two">
                        <h6 id="top-two-text" className="top-two-text-divider">
                            <div className="d-flex" id="side-banner">
                                <div>Edit public profile &amp; URL </div>
                                <div id="question-mark-div" className="d-flex">
                                    <FontAwesomeIcon id="question-mark-icon" icon="question-circle" />
                                </div>
                            </div>
                        </h6>
                    </div>
                    <div id="divider"></div>
                    <div id="top-two">
                        <h6 id="top-two-text" className="top-two-text-divider">
                            <div className="d-flex" id="side-banner">
                                <div>Add profile in another language</div>
                                <div id="question-mark-div">
                                    <FontAwesomeIcon id="question-mark-icon" icon="question-circle" />
                                </div>
                            </div>
                        </h6>
                    </div>

                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <div>People also viewed</div>
                                            </Card.Header>
                                            {this.state.alsoViewed !== null &&
                                                this.state.alsoViewed
                                                    .filter(user => user._id !== this.props.me._id && user._id !== this.props.match.params.id)
                                                    .map(person => {
                                                        return (
                                                            <Card.Body id="generated-card" key={person._id}>
                                                                <NavLink className="no-underline link-dim" to={"/profile/" + person._id}>
                                                                    <Row className="flex-row">
                                                                        <Col xs={4} id="card-img-column">
                                                                            <Card.Img id="card-img" src={person.image} />
                                                                        </Col>
                                                                        <Col xs={8} id="card-column">
                                                                            <Card.Title id="card-name" className="d-flex">
                                                                                <div id="card-description-title-one">{person.name}</div>
                                                                                <div id="third">3rd+</div>
                                                                            </Card.Title>
                                                                            <Card.Text id="card-description-container">
                                                                                <span id="card-description">{person.title}</span>
                                                                            </Card.Text>
                                                                            <Button id="card-button">Connect</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </NavLink>
                                                            </Card.Body>
                                                        )
                                                    })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="Show more">
                                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </ListGroup>
                            </div>
                        </div>
                    </div>

                    <div id="SideLoaderOneContainer">
                        <div id="SideLoaderOne">
                            <div id="SideLoaderOneImage">
                                <ListGroup id="SideLoaderOneGroup">
                                    <ListGroup.Item id="SideLoaderOneItem">
                                        <Card id="side-card">
                                            <Card.Header id="side-card-title">
                                                <div>People you may know</div>
                                            </Card.Header>
                                            {this.state.mayKnow !== null &&
                                                this.state.mayKnow
                                                    .filter(user => user._id !== this.props.me._id && user._id !== this.props.match.params.id)
                                                    .map(person => {
                                                        return (
                                                            <Card.Body id="generated-card" key={person._id}>
                                                                <NavLink className="no-underline link-dim" to={"/profile/" + person._id}>
                                                                    <Row className="flex-row">
                                                                        <Col xs={4} id="card-img-column">
                                                                            <Card.Img id="card-img" src={person.image} />
                                                                        </Col>
                                                                        <Col xs={8} id="card-column">
                                                                            <Card.Title id="card-name">
                                                                                <span id="card-description-title">{person.name}</span>
                                                                            </Card.Title>
                                                                            <Card.Text id="card-description-container">
                                                                                <span id="card-description">{person.title}</span>
                                                                            </Card.Text>
                                                                            <Button id="card-button">Connect</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </NavLink>
                                                            </Card.Body>
                                                        )
                                                    })}
                                        </Card>
                                    </ListGroup.Item>
                                    <div id="div-drop-one">
                                        <DropdownButton className="no-shadow" variant="secondary-outline" id="sl-one-drop" title="Show more">
                                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </Col>
            )
        )
    }
}

export default withRouter(SideLoaderOne)
