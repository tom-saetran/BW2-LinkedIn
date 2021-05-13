import React from "react"
import { Link } from "react-router-dom"
import "../assets/toms-bootstrap-extensions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

class HTTP501 extends React.Component {
    render() {
        return (
            <>
                <div className="pt-5 text-dim text-center">
                    <h1>501 - Not Implemented</h1>
                    <Link className="no-underline" to="/profile">
                        <h3 className="link-dim">
                            Go to <FontAwesomeIcon icon={faHome} />
                            <code className="text-success">/profile</code>
                        </h3>
                    </Link>
                </div>
            </>
        )
    }
}

export default HTTP501
