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
import { Form } from "react-bootstrap"

class App extends React.Component {
    state = {
        all: {},
        me: {},
        withID: {},
        exp: null,
        endpoint: "https://striveschool-api.herokuapp.com/api/profile/",
        post_endpoint: "https://striveschool-api.herokuapp.com/api/posts/",
        authtoken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDYwMzI5MTkzMDAwMTU2MGFiOTIiLCJpYXQiOjE2MjM2NTU5MzksImV4cCI6MTYyNDg2NTUzOX0.EDhAt-Kg9toNC0cxxxkPVdVeVF6ZJ7CzNe4ha6924mM"
    }

    componentDidMount = async () => {
        this.setState({ all: await this.crud.user.getAll() })
        this.setState({ me: await this.crud.user.get("me") })
        this.setState({ withID: await this.crud.user.get("5fc4ae95b708c200175de88d") })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.state.me._id !== undefined && this.state.exp === null) this.setState({ exp: await this.crud.user.get(this.state.me._id) })
    }

    httpCodes = {
        // 1xx - 4 Entries
        100: {
            number: "100",
            type: "Informational Response",
            name: "Continue",
            description: "This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished."
        },
        101: {
            number: "101",
            type: "Informational Response",
            name: "Switching Protocol",
            description: "This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to."
        },
        102: {
            number: "102",
            type: "Informational Response",
            name: "Processing",
            description: "This code indicates that the server has received and is processing the request, but no response is available yet.",
            note: "WebDAV"
        },
        103: {
            number: "103",
            type: "Informational Response",
            name: "Early Hints",
            description: "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response."
        },

        // 2xx - 10 Entries
        200: {
            number: "200",
            type: "Successful Response",
            name: "OK",
            description: "The request has succeeded. The meaning of the success depends on the HTTP method.",
            description_extra: {
                get: "The resource has been fetched and is transmitted in the message body.",
                head: "The entity headers are in the message body.",
                put: "The resource describing the result of the action is transmitted in the message body.",
                post: "The resource describing the result of the action is transmitted in the message body.",
                trace: "The message body contains the request message as received by the server."
            }
        },
        201: {
            number: "201",
            type: "Successful Response",
            name: "Created",
            description: "The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests."
        },
        202: {
            number: "202",
            type: "Successful Response",
            name: "Accepted",
            description: "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing."
        },
        203: {
            number: "203",
            type: "Successful Response",
            name: "Non-Authoritative Information",
            description: "This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status."
        },
        204: {
            number: "204",
            type: "Successful Response",
            name: "No Content",
            description: "There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones."
        },
        205: {
            number: "205",
            type: "Successful Response",
            name: "Reset Content",
            description: "Tells the user-agent to reset the document which sent this request."
        },
        206: {
            number: "206",
            type: "Successful Response",
            name: "Partial Content",
            description: "This response code is used when the Range header is sent from the client to request only part of a resource."
        },
        207: {
            number: "207",
            type: "Successful Response",
            name: "Multi-Status",
            description: "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
            note: "WebDAV"
        },
        208: {
            number: "208",
            type: "Successful Response",
            name: "Already Reported",
            description: "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
            note: "WebDAV"
        },
        226: {
            number: "226",
            type: "Successful Response",
            name: "IM Used",
            description: "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
            note: "HTTP Delta encoding"
        },

        // 3xx - 9 Entries
        300: {
            number: "300",
            type: "Redirection message",
            name: "Multiple Choice",
            description: "The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)"
        },
        301: {
            number: "301",
            type: "Redirection message",
            name: "Moved Permanently",
            description: "The URL of the requested resource has been changed permanently. The new URL is given in the response."
        },
        302: {
            number: "302",
            type: "Redirection message",
            name: "Found",
            description: "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests."
        },
        303: {
            number: "303",
            type: "Redirection message",
            name: "See Other",
            description: "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
        },
        304: {
            number: "304",
            type: "Redirection message",
            name: "Not Modified",
            description: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
        },
        305: {
            number: "305",
            type: "Redirection message",
            name: "Use Proxy",
            description: "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
            note: "DO NOT USE - Deprecated!"
        },
        306: {
            number: "306",
            type: "Redirection message",
            name: "unused",
            description: "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.",
            note: "DO NOT USE - Not in use!"
        },
        307: {
            number: "307",
            type: "Redirection message",
            name: "Temporary Redirect",
            description: "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request."
        },
        308: {
            number: "308",
            type: "Redirection message",
            name: "Permanent Redirect",
            description: "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request."
        },

        // 4xx - 29 Entries
        400: {
            number: "400",
            type: "Client Error Response",
            name: "Bad Request",
            description: "The server could not understand the request due to invalid syntax."
        },
        401: {
            number: "401",
            type: "Client Error Response",
            name: "Unauthorized",
            description: "Although the HTTP standard specifies unauthorized, semantically this response means unauthenticated. That is, the client must authenticate itself to get the requested response."
        },
        402: {
            number: "402",
            type: "Client Error Response",
            name: "Payment Required",
            description: "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.",
            note: "Experimental API!"
        },
        403: {
            number: "403",
            type: "Client Error Response",
            name: "Forbidden",
            description: "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server."
        },
        404: {
            number: "404",
            type: "Client Error Response",
            name: "Not Found",
            description: "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web."
        },
        405: {
            number: "405",
            type: "Client Error Response",
            name: "Method Not Allowed",
            description: "The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code."
        },
        406: {
            number: "406",
            type: "Client Error Response",
            name: "Not Acceptable",
            description: "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
        },
        407: {
            number: "407",
            type: "Client Error Response",
            name: "Proxy Authentication Required",
            description: "This is similar to 401 but authentication is needed to be done by a proxy."
        },
        408: {
            number: "408",
            type: "Client Error Response",
            name: "Request Timeout",
            description: "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
        },
        409: {
            number: "409",
            type: "Client Error Response",
            name: "Conflict",
            description: "This response is sent when a request conflicts with the current state of the server."
        },
        410: {
            number: "410",
            type: "Client Error Response",
            name: "Gone",
            description: "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for limited-time, promotional services. APIs should not feel compelled to indicate resources that have been deleted with this status code."
        },
        411: {
            number: "411",
            type: "Client Error Response",
            name: "Length Required",
            description: "Server rejected the request because the Content-Length header field is not defined and the server requires it."
        },
        412: {
            number: "412",
            type: "Client Error Response",
            name: "Precondition Failed",
            description: "The client has indicated preconditions in its headers which the server does not meet."
        },
        413: {
            number: "413",
            type: "Client Error Response",
            name: "Payload Too Large",
            description: "Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field."
        },
        414: {
            number: "414",
            type: "Client Error Response",
            name: "URI Too Long",
            description: "The URI requested by the client is longer than the server is willing to interpret."
        },
        415: {
            number: "415",
            type: "Client Error Response",
            name: "Unsupported Media Type",
            description: "The media format of the requested data is not supported by the server, so the server is rejecting the request."
        },
        416: {
            number: "416",
            type: "Client Error Response",
            name: "Range Not Satisfiable",
            description: "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data."
        },
        417: {
            number: "417",
            type: "Client Error Response",
            name: "Expectation Failed",
            description: "This response code means the expectation indicated by the Expect request header field can't be met by the server."
        },
        418: {
            number: "418",
            type: "Client Error Response",
            name: "I'm A Teapot",
            description: "The server refuses the attempt to brew coffee with a teapot.",
            note: "April fool's joke in the specification"
        },
        421: {
            number: "421",
            type: "Client Error Response",
            name: "Misdirected Request",
            description: "The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI."
        },
        422: {
            number: "422",
            type: "Client Error Response",
            name: "Unprocessable Entity",
            description: "The request was well-formed but was unable to be followed due to semantic errors.",
            note: "WebDAV"
        },
        423: {
            number: "423",
            type: "Client Error Response",
            name: "Locked",
            description: "The resource that is being accessed is locked.",
            note: "WebDAV"
        },
        424: {
            number: "424",
            type: "Client Error Response",
            name: "Failed Dependency",
            description: "The request failed due to failure of a previous request.",
            note: "WebDAV"
        },
        425: {
            number: "425",
            type: "Client Error Response",
            name: "Too Early",
            description: "Indicates that the server is unwilling to risk processing a request that might be replayed.",
            note: "Experimental API!"
        },
        426: {
            number: "426",
            type: "Client Error Response",
            name: "Upgrade Required",
            description: "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s)."
        },
        428: {
            number: "428",
            type: "Client Error Response",
            name: "Preconditions Required",
            description: "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
        },
        429: {
            number: "429",
            type: "Client Error Response",
            name: "Too Many Requests",
            description: "The user has sent too many requests in a given amount of time (rate limiting)."
        },
        431: {
            number: "431",
            type: "Client Error Response",
            name: "Request Header Fields Too Large",
            description: "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields."
        },
        451: {
            number: "451",
            type: "Client Error Response",
            name: "Unavailable For Legal Reasons",
            description: "The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government."
        },

        // 5xx - 11 Entries
        500: {
            number: "500",
            type: "Server Error Response",
            name: "Internal Server Error",
            description: "The server has encountered a situation it doesn't know how to handle."
        },
        501: {
            number: "501",
            type: "Server Error Response",
            name: "Not Implemented",
            description: "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD."
        },
        502: {
            number: "502",
            type: "Server Error Response",
            name: "Bad Gateway",
            description: "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."
        },
        503: {
            number: "503",
            type: "Server Error Response",
            name: "Service Unavailable",
            description: "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached."
        },
        504: {
            number: "504",
            type: "Server Error Response",
            name: "Gateway Timeout",
            description: "This error response is given when the server is acting as a gateway and cannot get a response in time."
        },
        505: {
            number: "505",
            type: "Server Error Response",
            name: "HTTP Version Not Supported",
            description: "The HTTP version used in the request is not supported by the server."
        },
        506: {
            number: "506",
            type: "Server Error Response",
            name: "Variant Also Negotiates",
            description: "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."
        },
        507: {
            number: "507",
            type: "Server Error Response",
            name: "Insufficient Storage",
            description: "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
            note: "WebDAV"
        },
        508: {
            number: "508",
            type: "Server Error Response",
            name: "Loop Detected",
            description: "The server detected an infinite loop while processing the request.",
            note: "WebDAV"
        },
        510: {
            number: "510",
            type: "Server Error Response",
            name: "Not Extended",
            description: "Further extensions to the request are required for the server to fulfill it."
        },
        511: {
            number: "511",
            type: "Server Error Response",
            name: "Network Authentication Required",
            description: "The 511 status code indicates that the client needs to authenticate to gain network access."
        }
    }

    crud = {
        user: {
            get: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    results = await fetch(this.state.endpoint + (userID !== undefined ? userID : ""), {
                        headers: {
                            Authorization: this.state.authtoken
                        }
                    })
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()

                    //if ((await results.image) !== undefined) return await this.crud.validators.image(results)
                } catch (error) {
                    console.error(error)
                    return null
                }
                return await results
            },
            getAll: async () => {
                let results
                try {
                    results = await fetch(this.state.endpoint, {
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
            get: async userID => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    results = await fetch(this.state.endpoint + userID + "/experiences", {
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
            getAll: async (userID, expID) => {
                let results
                try {
                    if (userID === "" || userID === undefined || userID === null) throw new Error("user id must be present")
                    if (expID === "" || expID === undefined || expID === null) throw new Error("experience id must be present")
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")
                    results = await fetch(this.state.endpoint + userID + "/experiences/" + expID, {
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (typeof data !== "object") throw new Error("data must be an object")
                    results = await fetch(this.state.endpoint + userID + "/experiences", {
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")
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
                    if (!this.crud.validators.id(userID)) throw new Error("user id is incorrect")
                    if (!this.crud.validators.id(expID)) throw new Error("experience id is incorrect")
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
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
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
            post: async (content, image) => {
                let results
                console.log(content)
                console.log(image)
                try {
                    // if (typeof data !== "object") throw new Error("data must be an object")
                    let data = {
                        text: content
                    }
                    results = await fetch(this.state.post_endpoint, {
                        method: "POST",
                        headers: {
                            Authorization: this.state.authtoken,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    console.log(results)
                    if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
                    results = await results.json()
                    console.log(results)
                    let id = await results._id
                    console.log(id)

                    if (image) {

                        let formData = new FormData()
                        formData.append("post", image) // the file input

                        console.log(formData)
                        results = await fetch(this.state.post_endpoint + id ,
                            {
                                method: "POST",
                                headers: {
                                    Authorization: this.state.authtoken,
                                    // "Content-Type": "multipart/form-data"
                                },
                                body: formData,
                                redirect: 'follow'

                            })

                        console.log(results)
                        console.log(await results.json())

                    }

                } catch (error) {
                    console.error(error)
                    return null
                }
                // return await results
            },
            put: async (postID, data) => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    if (typeof data !== "object") throw new Error("data must be an object")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    results = await fetch(this.state.post_endpoint + postID, {
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
            delete: async postID => {
                let results
                try {
                    if (postID === "" || postID === undefined || postID === null) throw new Error("post id must be present")
                    if (!this.crud.validators.id(postID)) throw new Error("post id is incorrect")
                    results = await fetch(this.state.post_endpoint + postID, {
                        method: "DELETE",
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
                if (await !ok) results.image = "https://via.placeholder.com/200x200?text=Profile+picture"
                console.log(await image)
                return await results
            }
        }
    }

    render() {
        return (
            <Router>
                <Route render={routeProps => <NavBar {...routeProps} crud={this.crud} me={this.state.me} all={this.state.all} />} />
                <Switch>
                    <Route render={routeProps => <Profile {...routeProps} crud={this.crud} exp={this.state.experience} me={this.state.me} all={this.state.all} />} exact path={["/profile/:id", "/profile"]} />

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
