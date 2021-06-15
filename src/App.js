import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/toms-bootstrap-extensions.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/"
import HTTP501 from "./components/HTTP501"
import HTTP404 from "./components/HTTP404"
import Profile from "./components/Profile"
import NavBar from "./components/NavBar"
import Feed from "./components/Feed"
import Footer from "./components/Footer"

class App extends React.Component {
    state = {
        all: {},
        me: {},
        withID: {},
        exp: null
    }

    componentDidMount = async () => {
        this.setState({ all: await this.crud.profile.getAll() })
        // this.setState({ me: await this.crud.profile.get("me") })
        // this.setState({ withID: await this.crud.profile.get("5fc4ae95b708c200175de88d") })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        //if (this.state.me._id !== undefined && this.state.exp === null) this.setState({ exp: await this.crud.profile.get(this.state.me._id) })
    }

    crud = {
        endpoint: process.env.REACT_APP_ENDPOINT,

        profile: {
            getAll: async () => {
                let result
                try {
                    result = await fetch(this.state.endpoint + "/profile", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!result.ok) throw new Error("Got data in return but status.ok is false!")
                    console.log(result)
                    result = await result.json()
                    console.log(result)
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await result
            },

            get: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID, {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            put: async (userID, data) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.endpoint + "/profile/" + userID, {
                        method: "PUT",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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

                    results = await fetch(this.state.endpoint + "/profile", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            delete: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID, {
                        method: "DELETE",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            upload: async (userID, data) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("id must be present")
                    if (data === "" || data === undefined || data === null) throw new Error("data must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")

                    results = await fetch(this.crud.endpoint + "/profile/" + userID + "/picture", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken
                        },
                        body: data
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    if (results.status !== 201) return false
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            getAsPDF: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/CV", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        },

        experiences: {
            getAll: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            get: async (userID, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences/" + expID, {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences/" + expID, {
                        method: "PUT",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences/" + expID, {
                        method: "DELETE",
                        headers: {
                            //Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            upload: async (userID, data, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    if (data === "" || data === undefined || data === null) throw new Error("data must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")

                    results = await fetch(this.crud.endpoint + "/profile/" + userID + "/experiences/" + expID, {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken
                        },
                        body: data
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    if (results.status !== 201) return false
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            getAsCSV: async (userID, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")

                    results = await fetch(this.state.endpoint + "/profile/" + userID + "/experiences" + expID + "CSV", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        },

        posts: {
            getAll: async () => {
                let results
                try {
                    results = await fetch(this.state.post_endpoint + "/posts", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            get: async postID => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID, {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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

                    results = await fetch(this.state.post_endpoint + "/posts", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID, {
                        method: "PUT",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
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
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID, {
                        method: "DELETE",
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            upload: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (data === "" || data === undefined || data === null) throw new Error("data must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")

                    results = await fetch(this.crud.endpoint + "/posts/" + postID, {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken
                        },
                        body: data
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    if (results.status !== 201) return false
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            like: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.post_endpoint + "/posts" + postID + "/like", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            unlike: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.post_endpoint + "/posts" + postID + "/like", {
                        method: "DELETE",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        },

        comments: {
            getAll: async postID => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts" + postID + "/comment", {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            get: async (postID, commentID) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (commentID === "" || commentID === undefined || commentID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (!this.crud.validators.id(commentID)) throw new Error("comment id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID + "/comment/" + commentID, {
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            post: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.post_endpoint + "/posts" + postID + "/comment", {
                        method: "POST",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            put: async (postID, data, commentID) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (commentID === "" || commentID === undefined || commentID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (!this.crud.validators.id(commentID)) throw new Error("comment id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID + "/comment/" + commentID, {
                        method: "PUT",
                        headers: {
                            // Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },

            delete: async (postID, commentID) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("id must be present")
                    if (commentID === "" || commentID === undefined || commentID === null) throw new Error("id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    if (!this.crud.validators.id(commentID)) throw new Error("comment id is incorrect")

                    results = await fetch(this.state.post_endpoint + "/posts/" + postID + "/comment/" + commentID, {
                        method: "DELETE",
                        headers: {
                            // Authorization: this.state.authtoken
                        }
                    })

                    if (!results.ok) throw new Error("Got data in return but status.ok is false!")
                    results = await results.json()
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            }
        },

        validators: {
            id: id => {
                let regex = /[0-9a-f]{24}/g
                return regex.test(id.toLowerCase()) || id === "me"
            },
            image: async results => {
                console.log(results)
                let image = new Image()
                let ok = false
                image.onload = async () => (ok = (await this.width) > 0 ? true : false)
                image.onerror = () => (ok = false)
                image.src = results.image
                if (!ok) results.image = "https://via.placeholder.com/200x200?text=Profile+picture"
                console.log(image)
                return await results
            }
        }
    }

    render() {
        return (
            <Router>
                <Route render={routeProps => <NavBar {...routeProps} crud={this.crud} me={this.state.me} all={this.state.all} />} />
                <Switch>
                    <Route
                        render={routeProps => <Profile {...routeProps} crud={this.crud} exp={this.state.experience} me={this.state.me} all={this.state.all} />}
                        exact
                        path={["/profile/:id", "/profile"]}
                    />

                    <Route render={routeProps => <Feed {...routeProps} crud={this.crud} me={this.state.me} all={this.state.all} />} exact path="/feed" />
                    <Route render={routeProps => <HTTP501 {...routeProps} />} exact path="/" />
                    <Route render={routeProps => <HTTP404 {...routeProps} />} />
                </Switch>
                <Route render={routeProps => <Footer {...routeProps} crud={this.crud} />} />
            </Router>
        )
    }
}

export default App
