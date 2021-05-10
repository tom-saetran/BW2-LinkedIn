import React from "react"
import { Row, Col } from "react-bootstrap"


class Interests extends React.Component {

    render() {
        return (
            <>
                <Row style={{ padding: "24px", backgroundColor: "white", borderRadius: "15px", marginTop: "20px" }}>
                <h6>Interests</h6>
                    <Col md={6}>
                    <div className="d-flex flex-column">
                        <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E">

                        </img>
                        </div>

                    </div>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </>
        )
    }
}

export default Interests