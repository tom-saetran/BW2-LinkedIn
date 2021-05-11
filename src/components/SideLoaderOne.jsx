import { Badge, Button, Card, Col, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Jumbotron, ListGroup, Row } from 'react-bootstrap'
import React from 'react'

class SideLoaderOne extends React.Component {
    state = {
        me: null,
        all: null,
        some: null
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (this.props.me !== this.state.me) this.setState({ me: this.props.me })
        if (this.props.all !== this.state.all) this.setState({ all: this.props.all })
        if (this.state.some === null && this.state.all !== null) this.setState({ some: this.some() })
    }


    //  const noInfo = []
    // if (this.state.some !== undefined){
    //    continue
    //} else{
    //    noInfo.push(this.state.some)
    // }
    //


    some = () => this.state.all.map(a => [a, Math.random()])
        .sort((a, b) => { return a[1] < b[1] ? -1 : 1; })
        .slice(0, 5)
        .map(a => a[0]);


    render() {

        return (

            <> {
                this.state.me !== undefined &&
                <Container>
                    <Row>
                        <Col>

                        </Col>
                        <Col xs="4">
                            <Container id="top-two">
                                <h6>
                                    Edit public profile + URL <sup><Badge className="text-secondary" variant="secondary">?</Badge></sup>
                                </h6>
                                <h6>
                                    Add profile in another language <Badge className="text-secondary" variant="secondary">?</Badge>
                                </h6>

                            </Container>

                            <Container id="SideLoaderOneContainer" >
                                <div id="SideLoaderOne">
                                    <div id="SideLoaderOneImage">
                                        <ListGroup id="SideLoaderOneGroup">
                                            <ListGroup.Item id="SideLoaderOneItem">
                                                <Card id="side-card">
                                                    <Card.Header id="side-card-title">
                                                        <h2>People also viewed</h2>
                                                    </Card.Header>
                                                    {this.state.some !== null && this.state.some.map(person => {
                                                        return (
                                                            <Card.Body id="generated-card" key={person._id}>
                                                                <Row className="flex-row">
                                                                    <Col xs={4} className="">
                                                                        <Card.Img id="card-img" src={person.image} />
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <Card.Title>
                                                                            {console.log(person)}
                                                                            {person.name}<span id="person-title"> : {person.title}</span>
                                                                        </Card.Title>
                                                                        <Card.Text>

                                                                            <div id="card-description">{person.area}</div>
                                                                        </Card.Text>
                                                                        <Button id="card-button">
                                                                            Connect
                                                                </Button>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>)
                                                    })}
                                                </Card>



                                            </ListGroup.Item>
                                            <div id="div-drop-one">
                                                <DropdownButton variant="outline-secondary" id="sl-one-drop" title="Show more">
                                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </ListGroup>
                                    </div>
                                </div>
                            </Container>

                            <Container id="SideLoaderOne" >
                                <div id="SideLoaderOneContainer">
                                    <div id="SideLoaderOneImage">
                                        <ListGroup id="SideLoaderOneGroup">
                                            <ListGroup.Item id="SideLoaderOneItem">
                                                <Card id="side-card">
                                                    <Card.Header id="side-card-title">
                                                        <h2>People you may know</h2>
                                                    </Card.Header>
                                                    {this.state.some !== null && this.state.some.map(person => {
                                                        return (
                                                            <Card.Body id="generated-card" key={person._id}>
                                                                <Row className="flex-row">
                                                                    <Col xs={4} className="">
                                                                        <Card.Img id="card-img" src={person.image} />
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <Card.Title>
                                                                            {console.log(person)}
                                                                            {person.name}
                                                                        </Card.Title>
                                                                        <Card.Text>
                                                                            <span>{person.title}</span>
                                                                            <div id="card-description">{person.area}</div>
                                                                        </Card.Text>
                                                                        <Button id="card-button">
                                                                            Connect
                                                                </Button>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>)
                                                    })}
                                                </Card>



                                            </ListGroup.Item>
                                            <div id="div-drop-one">
                                                <DropdownButton variant="outline-secondary" id="sl-one-drop" title="Show more">
                                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </ListGroup>
                                    </div>
                                </div>
                            </Container>
                            <Container>
                                <ListGroup>
                                    <ListGroup.Item><Badge className="text-secondary" variant="primary">IN</Badge>LEARNING</ListGroup.Item>
                                    <ListGroup.Item>Add new skills with these courses</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container>
                                            <Row>
                                                <Col xs="4">
                                                    <img id="pickme"></img>
                                                </Col>
                                                <Col xs="8">
                                                    <h2>Cybersecurity for Executives</h2>
                                                    <span>22, 331 views</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container>
                                            <Row>
                                                <Col xs="4">
                                                    <img id="pickme"></img>
                                                </Col>
                                                <Col xs="8">
                                                    <h2>Cybersecurity for Executives</h2>
                                                    <span>22, 331 views</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Container>
                                            <Row>
                                                <Col xs="4">
                                                    <img id="pickme"></img>
                                                </Col>
                                                <Col xs="8">
                                                    <h2>Cybersecurity for Executives</h2>
                                                    <span>22, 331 views</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                    <ListGroup.Item>Add new skills with these courses</ListGroup.Item>

                                </ListGroup>
                            </Container>
                        </Col>
                    </Row>

                </Container>
            }</>


        )

    }
}
export default SideLoaderOne



