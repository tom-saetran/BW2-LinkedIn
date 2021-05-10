import React from "react"
import { Jumbotron, Button, Row, Col, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"


class ProfileJumbotron extends React.Component {





    render() {

        return (

            <Jumbotron style={{borderRadius: "50px"}} className="shadow-lg">
               <Row style={{position: "relative"}}>
             

                <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" alt="banner"></img>
                <img style={{position: "absolute", height: "100px", width: "100px", bottom: "-30%", left: "5%"}} className="img-fluid rounded-circle" src="https://i.pinimg.com/originals/3d/99/a7/3d99a7e6cb285c7f7cf5e87131e45c92.jpg" alt="profilePic"></img>
               </Row>
               {/* <Row style={{position: "relative", top: "-45px"}}>
               <Col md={{span: 2, offset: 1}}>
     
               </Col>
               </Row> */}
               <Row className="mt-5">
                <Col className="pl-5" md={8}>
                <h5>Kaiwan Kadir</h5>
                <p>
                Finance Manager at Ministry of Housing, Communities and Local Government
                </p>

                <div className="d-flex">
                <span>London, United Kingdom</span>
                <span>.</span>
                <span><a href="www.google.com">Contact info</a></span>
                </div>

                <div classNam="d-flex justify-content-between">
                    <DropdownButton style={{borderRadius: "10px"}} size="sm" variant="primary" as={ButtonGroup} title="Open to" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} variant title="Add profile section" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="light">More ...</Button> 
                </div>

                </Col>
                <Col md={4}>
                    <div>
                        
                    </div>
                </Col>
               </Row>
             
            </Jumbotron>


        )
    }
}

export default ProfileJumbotron