import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/"
import HTTP501 from "./components/HTTP501"
import HTTP404 from "./components/HTTP404"
import Profile from "./components/Profile"
import NavBar from "./components/NavBar"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import SideLoaderOne from "./components/SideLoaderOne"

class App extends React.Component {
    state = {
        allprofiles: {},
        me: {},
        withID: {},
        exp: null,
        endpoint: "https://striveschool-api.herokuapp.com/api/profile/",
        post_endpoint: "https://striveschool-api.herokuapp.com/api/posts/",
        authtoken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWJlMDYxOWU1ZDAwMTUxZjhmN2IiLCJpYXQiOjE2MjA2MzQ1OTMsImV4cCI6MTYyMTg0NDE5M30.m8Z_6EwSxdhgdmOtupcNuhyf9wv2VNmMt9PuzYmgTV8"
    }

    componentDidMount = async () => {
        this.setState({ allprofiles: await this.crud.user.get() })
        this.setState({ me: await this.crud.user.get("me") })
        this.setState({ withID: await this.crud.user.get("5fc4ae95b708c200175de88d") })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.state.me._id !== undefined && this.state.exp === null) this.setState({ exp: await this.crud.user.get(this.state.me._id) })
    }

    crud = {
        user: {
            get: async id => {
                let results
                try {
                    results = await fetch(this.state.endpoint + (id !== undefined ? id : ""), {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            put: async data => {
                let results
                try {
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.endpoint, {
                        method: "PUT",
                        headers: {
                            Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            post: false,
            delete: false
        },
        experiences: {
            get: async id => {
                let results
                try {
                    if (id === "" || id === undefined || id === null) throw new Error("id must be present")
                    results = await fetch(this.state.endpoint + id, {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            post: async (userID, data) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.endpoint + userID + "/experiences/", {
                        method: "POST",
                        headers: {
                            Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            put: async (userID, data, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.endpoint + userID + "/experiences/" + expID, {
                        method: "PUT",
                        headers: {
                            Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            delete: async (userID, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    results = await fetch(this.state.endpoint + userID + "/experiences/" + expID, {
                        method: "DELETE",
                        headers: {
                            Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        },
        posts: {
            get: async postID => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    results = await fetch(this.state.post_endpoint + postID, {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            getAll: async () => {
                let results
                try {
                    results = await fetch(this.state.post_endpoint, {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            post: async data => {
                let results
                try {
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.post_endpoint, {
                        headers: {
                            Authorization: this.state.authtoken
                        },
                        body: JSON.stringify(data)
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            put: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.post_endpoint + postID, {
                        headers: {
                            Authorization: this.state.authtoken
                        },
                        body: JSON.stringify(data)
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            delete: async postID => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    results = await fetch(this.state.post_endpoint + postID, {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        }
    }

    render() {
        return (
            <Router>
                <Route render={routeProps => <NavBar {...routeProps} crud={this.crud} me={this.state.me} all={this.state.allprofiles} />} />
                <Switch>
                    <Route render={routeProps => <Profile {...routeProps} crud={this.crud} exp={this.state.experience} me={this.state.me} all={this.state.allprofiles} />} exact path={["/profile/:id", "/profile"]} />

                    <Route render={routeProps => <Feed {...routeProps} crud={this.crud} />} exact path="/feed" />
                    <Route render={routeProps => <HTTP501 {...routeProps} />} exact path="/" />
                    <Route render={routeProps => <HTTP404 {...routeProps} />} />
                </Switch>
                <Route render={routeProps => <Footer {...routeProps} crud={this.crud} />} />
            </Router>
        )
    }
}

export default App
