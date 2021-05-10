import React from "react"
import { Jumbotron, Button, Row, Col } from "react-bootstrap"


class ProfileJumbotron extends React.Component {





    render() {

        return (

            <Jumbotron className="mt-5 shadow-lg">
               <Row style={{position: "relative"}}>
             

                <img className="img-fluid" src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg"></img>
                <img style={{position: "absolute", height: "100px", width: "100px", bottom: "-30%", left: "5%"}} className="img-fluid rounded-circle" src="https://i.pinimg.com/originals/3d/99/a7/3d99a7e6cb285c7f7cf5e87131e45c92.jpg"></img>
               </Row>
               <Row style={{position: "relative", top: "-45px"}}>
               <Col md={{span: 2, offset: 1}}>
     
               </Col>
               </Row>
               <Row className="mt-5">
                <Col md={8}>
                <h5>Kaiwan Kadir</h5>
                <p>
                Finance Manager at Ministry of Housing, Communities and Local Government
                </p>

                </Col>
                <Col md={4}>
                    
                    </Col>
               </Row>
               
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>


        )
    }
}

export default ProfileJumbotron