import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/"
import HTTP501 from "./components/HTTP501"
import HTTP404 from "./components/HTTP404"
import Profile from "./components/Profile"
import NavBar from "./components/NavBar"
import Feed from "./components/Feed"
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
        this.setState({ allprofiles: await this.getProfileData() })
        this.setState({ me: await this.getProfileData("me") })
        this.setState({ withID: await this.getProfileData("5fc4ae95b708c200175de88d") })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.state.me._id !== undefined && this.state.exp === null) this.setState({ exp: await this.getExperiences(this.state.me._id) })
    }

    getExperiences = async id => {
        let results
        try {
            if (id === "" || id === undefined || id === null) throw new Error("id must be present")
            results = await fetch(this.state.endpoint + id + "/experiences", {
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

    postExperienceData = async (userID, data) => {
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
            data = await results.json()
            console.log(results)
            if (results.ok) {
                alert("posted")
            }
        } catch (error) {
            console.error(error)
            return null
        }
        return await data
    }

    putExperienceData = async (userID, data, expID) => {
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
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
    }

    deleteExperienceData = async (userID, expID) => {
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
            results = await results.json()
        } catch (error) {
            console.error(error)
            return null
        }
        return await results
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

    getAllPosts = async () => {
        let results
        try {
            results = await fetch(this.state.post_endpoint, {
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

    getSpecificPost = async postID => {
        let results
        try {
            results = await fetch(this.state.post_endpoint + postID, {
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

    postPost = async data => {
        let results
        try {
            results = await fetch(this.state.post_endpoint, {
                headers: {
                    Authorization: this.state.authtoken
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

    putPost = async (postID, data) => {
        let results
        try {
            results = await fetch(this.state.post_endpoint + postID, {
                headers: {
                    Authorization: this.state.authtoken
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

    deletePost = async postID => {
        let results
        try {
            results = await fetch(this.state.post_endpoint + postID, {
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

    crud_experience = {
        get: id => this.getExperiences(id),
        post: (userID, data) => this.postExperienceData(userID, data),
        put: (userID, data, expID) => this.putExperienceData(userID, data, expID),
        delete: (userID, expID) => this.deleteExperienceData(userID, expID)
    }

    crud_user = {
        get: id => this.getProfileData(id),
        post: false,
        put: data => this.putProfileData(data),
        delete: false
    }

    crud_post = {
        get: postID => this.getSpecificPost(postID),
        getAll: () => this.getAllPosts(),
        post: postID => this.postPost(postID),
        put: (postID, data) => this.putPost(postID, data),
        delete: postID => this.deletePost(postID)
    }

    full_crud = {
        crud_user: this.crud_user,
        crud_experience: this.crud_experience,
        crud_post: this.crud_post
    }

    render() {
        return (
            <Router>
                <Route render={routeProps => <NavBar {...routeProps} crud={this.crud_user} me={this.state.me} all={this.state.allprofiles} />} />
                <Switch>
                    <Route render={routeProps => <Profile {...routeProps} crud={this.crud_experience} exp={this.state.experience} me={this.state.me} all={this.state.allprofiles} />} exact path="/profile/:id" />
                    <Route render={routeProps => <Profile {...routeProps} crud={this.crud_experience} exp={this.state.experience} me={this.state.me} all={this.state.allprofiles} />} exact path="/profile" />
                    <Route render={routeProps => <Feed {...routeProps} crud={this.full_crud} />} exact path="/feed" />
                    <Route render={routeProps => <HTTP501 {...routeProps} />} exact path="/" />
                    <Route render={routeProps => <HTTP404 {...routeProps} />} />
                </Switch>

                {/* <Route render={routeProps => <Footer {...routeProps} />} /> */}
            </Router>
        )
    }
}

export default App
