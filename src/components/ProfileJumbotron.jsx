import React from "react"
import { Container, Button, Row, Col, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap"

class ProfileJumbotron extends React.Component {
    render() {
        return (

            <>  
           

            <Row style={{backgroundColor: "white", borderRadius: "15px"}}>
                
                <Row style={{ position: "relative", }}>
          
                    <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" alt="banner">

                    </img>
                    <img style={{ position: "absolute", width: "150px", bottom: "-50px", left: "35px" }} className="img-fluid rounded-circle" src="https://i.pinimg.com/originals/3d/99/a7/3d99a7e6cb285c7f7cf5e87131e45c92.jpg" alt="profilePic"></img>

                </Row>
                {/* <Row style={{position: "relative", top: "-45px"}}>
               <Col md={{span: 2, offset: 1}}>
     
               </Col>
               </Row> */}
                <Row style={{ padding: "24px" }} className="mt-5">
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

                        <div className="d-flex justify-content-between">
                            <DropdownButton className="rounded-circle" size="sm" variant="primary" as={ButtonGroup} title="Open to" id="bg-nested-dropdown">
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
                        <div className=" d-flex" >

                            <img style={{ width: "26px", }} src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E">
                            </img>
                            <span className="ml-2 text-truncate">
                                Ministry of Housing Communities and local government
                            </span>
                        </div>
                        <div className="mt-2 d-flex" >

                            <img style={{ width: "26px", height: "26px" }} src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk">
                            </img>
                            <p className="ml-2 text-truncate" >
                                Harvard University
                            </p >
                        </div>

                    </Col>
                </Row>
                <Row >
                    <Col md={6}>
                        <div style={{ border: "2px dotted grey" }} className="my-2 mx-2 "><a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a></div>

                    </Col>
                    <Col md={6}>
                        <div style={{ border: "2px dotted grey" }} className="my-2 mx-2 "><a href="www.google.com">Show recruiters you are open to work - you control who sees this.</a></div>
                    </Col>
                </Row>
            </Row>
            

            </>
        )
    }
}

export default ProfileJumbotron
