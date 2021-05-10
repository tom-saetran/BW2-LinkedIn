import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/"
import HTTP501 from "./components/HTTP501"
import HTTP404 from "./components/HTTP404"
import Profile from "./components/Profile"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

class App extends React.Component {
    state = {
        allprofiles: {},
        me: {},
        withID: {},
        endpoint: "https://striveschool-api.herokuapp.com/api/profile/",
        authtoken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWJlMDYxOWU1ZDAwMTUxZjhmN2IiLCJpYXQiOjE2MjA2MzQ1OTMsImV4cCI6MTYyMTg0NDE5M30.m8Z_6EwSxdhgdmOtupcNuhyf9wv2VNmMt9PuzYmgTV8"
    }

    componentDidMount = async () => {
        this.setState({ allprofiles: await this.getProfileData() })
        this.setState({ me: await this.getProfileData("me") })
        this.setState({ withID: await this.getProfileData("5fc4ae95b708c200175de88d") })
    }

    getProfileData = async id => {
        let results
        try {
            results = await fetch(this.state.endpoint + (id !== undefined ? id : ""), {
                headers: {
                    Authorization: this.state.authtoken
                }
            })
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    putProfileData = async data => {
        let results
        try {
            results = await fetch(this.state.endpoint, {
                method: "PUT",
                headers: {
                    Authorization: this.state.authtoken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    render() {
        return (
            <Router>
                {/* <Route render={routeProps => <NavBar {...routeProps} me={this.state.me} />} /> */}
                <Switch>
                    <Route render={routeProps => <Profile {...routeProps} me={this.state.me} all={this.state.allprofiles} />} />
                    {/* <Route render={routeProps => <HTTP501 {...routeProps} />} exact path="/" /> */}
                    {/* <Route render={routeProps => <HTTP404 {...routeProps} />} /> */}
                </Switch>
                {/* <Route render={routeProps => <Footer {...routeProps} />} /> */}
            </Router>
        )
    }
}

export default App
