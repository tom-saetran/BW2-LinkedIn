import React, { useEffect } from "react"
import {
    Card,
    Col,
    Container,
    Row,
    Form,
    Button,
    ButtonToolbar,
    ButtonGroup,
    Spinner,
    Badge,
    Accordion,
    InputGroup,
    Modal,
    FormGroup,
    OverlayTrigger,
    Popover
} from "react-bootstrap"
import { Link } from "react-router-dom"
import * as Icon from "react-bootstrap-icons"
import ReactTimeAgo from "react-time-ago"
import Neighbourhood from "../components/Neighbours"
import uniqid from "uniqid"

class Blogs extends React.Component {
    state = {
        posts: null,
        loading: true,
        cover: null,
        update: false
    }

    componentDidMount = async () => {
        this.setState({ posts: await this.props.crud.posts.getAll() })
    }

    componentDidUpdate = async (_previousProps, _previousState) => {
        if (this.state.loading && this.state.posts && !this.state.update) this.setState({ loading: false })
        if (this.state.loading && this.state.update) this.setState({ posts: await this.props.crud.posts.getAll(), update: false })

        if (this.state.update !== _previousState.update)
            this.setState(async state => {
                return { ...state, update: false, loading: false }
            })
    }

    handleUpdate = () => {
        this.setState({ update: true, loading: true })
    }

    render() {
        return (
            <Container fluid className="px-0">
                <Row className="py-3 no-gutters">
                    <Col className="pr-3 pr-sm-0 pl-3 pl-xl-0" xs={12} sm={4} md={3} xl={{ span: 2, offset: 1 }}>
                        <User user={this.props.user} />
                    </Col>
                    <Col className="px-3" xs={12} sm={8} md={6}>
                        <Controls onUpdate={this.handleUpdate} crud={this.props.crud} user={this.props.user} cover={this.state.cover} />
                        <hr />
                        <Posts
                            crud={this.props.crud}
                            user={this.props.user}
                            posts={this.state.posts}
                            loading={this.state.loading}
                            onUpdate={this.handleUpdate}
                        />
                    </Col>
                    <Col className="pr-3 d-none d-md-block pr-xl-0" md={3} xl={2}>
                        <Tools />
                        <hr />
                        <Neighbourhood crud={this.props.crud} user={this.props.user} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const AddBlogModal = props => {
    const [show, setShow] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [text, setContent] = React.useState("")
    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const [image, stageImage] = React.useState("")

    const inputRef = React.useRef(null)
    const selectImage = () => inputRef.current.click()
    const setImage = event => {
        event.preventDefault()
        event.stopPropagation()

        const image = event.target.files[0]
        stageImage(image)
        props.stageImage(image)
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            await handleSend()
            setShow(false)
            props.onUpdate()
            reset()
        }
        setValidated(true)
    }

    const reset = () => {
        setTitle("")
        setContent("")
        props.setContent("")
        stageImage(null)
        props.stageImage(null)
    }

    useEffect(() => {
        setContent(props.content)
    }, [props.content])

    useEffect(() => {
        stageImage(props.image)
    }, [props.image])

    const handleSend = async () => {
        const data = {
            title,
            text,
            user: props.user._id,
            username: props.user.username
        }

        if (!sending) {
            setSending(true)
            const result = await props.crud.posts.post(data)
            if (result && image) {
                let formData = new FormData()
                formData.append("image", image)
                await props.crud.posts.upload(result, formData)
            }
            setSending(false)
        }
    }

    return (
        <>
            <Button className="card-border rounded text-dim no-active-outline" variant="white" onClick={handleShow}>
                Send
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Add New</Card.Header>
                    <Modal.Body>
                        <Form.Group controlId="formTitle">
                            <Form.Text className="pl-1 text-dim">Title</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Form.Control.Feedback className="pl-1 text-dim" type="invalid">
                                Title is required.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback className="pl-1 text-dim" type="valid">
                                Thats a nice title!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formContent">
                            <Form.Text className="pl-1 text-dim">Content</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                as="textarea"
                                rows={3}
                                required
                                value={text}
                                onChange={e => setContent(e.target.value)}
                            />
                            <Form.Control.Feedback className="pl-1 text-dim" type="invalid">
                                Content is required.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback className="pl-1 text-dim" type="valid">
                                Thats some quality content!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <div className="d-flex justify-content-between pb-3 pr-3">
                        <div>{image && <div className="pt-2 pl-3">Selected: {image.name}</div>}</div>
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2 card-border rounded">
                                <Button className="pb-2 text-dim card-border-right no-active-outline" variant="white" onClick={selectImage}>
                                    <Icon.Image fill="dimgrey" />
                                    <input onChange={setImage.bind(this)} type="file" id="file" ref={inputRef} style={{ display: "none" }} />
                                </Button>
                                <EmojiPopOver />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                                    Send
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

const EditBlogModal = props => {
    const [show, setShow] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [text, setContent] = React.useState("")
    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const [image, stageImage] = React.useState(false)

    const inputRef = React.useRef(null)
    const selectImage = () => inputRef.current.click()
    const setImage = event => {
        event.preventDefault()
        event.stopPropagation()

        const image = event.target.files[0]
        stageImage(image)
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            await handleSend()
            setShow(false)
            props.onUpdate()
        }
        setValidated(true)
    }

    useEffect(() => {
        setContent(props.post.text)
    }, [props.post.text])

    useEffect(() => {
        setTitle(props.post.title)
    }, [props.post.title])

    const handleSend = async () => {
        const data = {
            title,
            text,
            user: props.post.user._id,
            username: props.post.user.username
        }
        if (!sending) {
            setSending(true)
            const result = await props.crud.posts.put(props.post._id, data)
            if (result && image) {
                let formData = new FormData()
                formData.append("image", image)
                await props.crud.posts.upload(result._id, formData)
            }
            setSending(false)
        }
    }

    return (
        <>
            <Button
                className={
                    props.admin
                        ? "text-dim pb-2 bg-pink no-active-outline border-right-danger"
                        : props.moderator
                        ? "text-dim pb-2 bg-yellow no-active-outline border-right-warning"
                        : "text-dim pb-2 no-active-outline"
                }
                variant="white"
                onClick={handleShow}
            >
                <Icon.Pen className="mb-1" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Edit {props.post.title}</Card.Header>
                    <Modal.Body>
                        <Form.Group controlId="formTitle">
                            <Form.Text className="pl-1 text-dim">Title</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formContent">
                            <Form.Text className="pl-1 text-dim">Content</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                as="textarea"
                                rows={2}
                                required
                                value={text}
                                onChange={e => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>

                    <div className="d-flex justify-content-between pb-3 pr-3">
                        <div>{image && <div className="pt-2 pl-3">Selected: {image.name}</div>}</div>
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2 card-border rounded">
                                <Button className="pb-2 text-dim card-border-right no-active-outline" variant="white" onClick={selectImage}>
                                    <Icon.Image fill="dimgrey" />
                                    <input onChange={setImage.bind(this)} type="file" id="file" ref={inputRef} style={{ display: "none" }} />
                                </Button>
                                <EmojiPopOver />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                                    Send
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

const RemoveBlogModal = props => {
    const [show, setShow] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDelete = async () => {
        if (!sending) {
            setSending(true)
            await props.crud.posts.delete(props.post._id)
            setShow(false)
            props.onUpdate()
            setSending(false)
        }
    }

    return (
        <>
            <Button
                className={
                    props.admin
                        ? "text-danger pb-2 bg-pink border-left-danger no-active-outline"
                        : props.moderator
                        ? "text-danger pb-2 bg-yellow border-left-warning no-active-outline"
                        : "text-danger pb-2 card-border-left no-active-outline"
                }
                variant="white"
                onClick={handleShow}
            >
                <Icon.Trash className="mb-1" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-center py-2 text-dim">This will remove the blog post permanently!</Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <Card.Title as={"h6"}>{props.post.title}</Card.Title>
                        <div className="ml-auto">
                            <Badge pill className="text-dim bg-white card-border">
                                {props.post.category}
                            </Badge>
                        </div>
                    </div>
                    <Card.Text>{props.post.content}</Card.Text>
                </Modal.Body>
                <Modal.Footer className="justify-content-center align-items-end">
                    <Button className="card-border text-dim no-active-outline" variant="white" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="card-border text-danger no-active-outline" variant="white" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const AddComment = props => {
    const [comment, setComment] = React.useState("")
    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            await handleSend()
            setComment("")
            props.onUpdate()
        }
        setValidated(true)
    }

    const handleSend = async () => {
        const id = props.post._id
        const data = {
            comment,
            user: props.user._id
        }

        if (!sending) {
            setSending(true)
            await props.crud.comments.post(id, data)
            setSending(false)
        }
    }

    return (
        <>
            <hr />
            <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                <FormGroup controlId="formComment">
                    <Form.Text className="pl-1 text-truncate">Add a comment to {props.post.title}</Form.Text>
                    <div className="d-flex">
                        <InputGroup>
                            <Form.Control
                                className="card-border no-active-outline"
                                as="input"
                                value={comment}
                                required
                                onChange={e => setComment(e.target.value)}
                                placeholder="Comment..."
                            />
                            <InputGroup.Append>
                                <EmojiPopOver append={true} />
                                <InputGroup.Text as={Button} type="submit" variant="white" className="bg-white card-border text-dim no-active-outline">
                                    <Icon.ChatText />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </FormGroup>
            </Form>
        </>
    )
}

const EditCommentModal = props => {
    const [show, setShow] = React.useState(false)
    const [comment, setComment] = React.useState("")
    const [validated, setValidated] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleSubmit = async e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            e.preventDefault()
            if (!sending) {
                setSending(true)
                await handleSend()
                setShow(false)
                props.onUpdate()
                setSending(false)
            }
        }
        setValidated(true)
    }

    useEffect(() => {
        setComment(props.comment.comment)
    }, [props.comment.comment])

    const handleSend = async () => {
        const data = {
            comment,
            user: props.comment.user
        }

        await props.crud.comments.put(props.post._id, data, props.comment._id)
    }

    return (
        <>
            <Button
                className={
                    props.admin
                        ? "pb-2 bg-pink no-active-outline border-right-danger"
                        : props.moderator
                        ? "pb-2 bg-yellow no-active-outline border-right-warning"
                        : "pb-2 no-active-outline"
                }
                variant="white"
                onClick={handleShow}
            >
                <Icon.Pen fill="dimgrey" className="mb-1" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Card.Header className="text-center text-dim py-2 bg-white">Edit comment in {props.post.title}</Card.Header>
                    <Modal.Body>
                        <Form.Group controlId="formComment">
                            <Form.Text className="pl-1 text-dim">Comment</Form.Text>
                            <Form.Control
                                className="card-border text-dim cursor-text no-active-outline"
                                type="text"
                                required
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>

                    <div className="d-flex justify-content-end pb-3 pr-3">
                        <Button className="card-border rounded text-dim no-active-outline" variant="white" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

const RemoveCommentModal = props => {
    const [show, setShow] = React.useState(false)
    const [sending, setSending] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDelete = async () => {
        if (!sending) {
            setSending(true)
            await props.crud.comments.delete(props.post._id, props.comment._id)
            setShow(false)
            props.onUpdate()
            setSending(false)
        }
    }

    return (
        <>
            <Button
                className={
                    props.admin
                        ? "text-danger border-left-danger bg-pink no-active-outline"
                        : props.moderator
                        ? "text-danger border-left-warning bg-yellow no-active-outline"
                        : "text-danger card-border-left no-active-outline"
                }
                variant="white"
                onClick={handleShow}
            >
                <Icon.Trash className="mb-1" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-center py-2 text-dim">This will remove the comment permanently!</Modal.Header>
                <Modal.Footer className="justify-content-center align-items-end">
                    <Button className="card-border text-dim no-active-outline" variant="white" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="card-border text-danger no-active-outline" variant="white" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const User = props => {
    return props.user ? (
        <Card className="text-dim">
            <Card.Header className="text-center py-1 bg-white">{props.user.name}</Card.Header>
            <Card.Body>
                <Link className="link" to={"profile/" + props.user._id}>
                    <Row className="justify-content-center pb-3">
                        <Card.Img className="card-avatar" alt="" src={props.user.image} />
                    </Row>
                </Link>
                <Link className="link" to={"profile/" + props.user._id}>
                    <Card.Title as={"h6"} className="text-center">
                        {props.user.name} {props.user.surname}
                    </Card.Title>
                </Link>
                <Card.Text>{props.user.title}</Card.Text>
                <hr />
                <Card.Text>{props.user.bio}</Card.Text>
            </Card.Body>
        </Card>
    ) : (
        <Card className="text-dim text-center">
            <Card.Body>
                <Spinner className="spinner" animation="border" />
            </Card.Body>
        </Card>
    )
}

const Tools = () => {
    return (
        <Card className="card-border text-dim">
            <Card.Body className="py-3">
                <Link className="link" to="/profile">
                    Profile
                </Link>
                <br />
                <Link className="link" to="/profile/settings">
                    Settings
                </Link>
                <br />
                <Link className="link" to="/help">
                    Help
                </Link>
                <br />
                <Link className="link" to="/help/faq">
                    FAQ
                </Link>
                <br />
            </Card.Body>
        </Card>
    )
}

const Controls = props => {
    const [content, setContent] = React.useState("")
    const [image, stageImage] = React.useState("")

    const inputRef = React.useRef(null)
    const selectImage = () => inputRef.current.click()
    const setImage = event => {
        event.preventDefault()
        event.stopPropagation()

        const image = event.target.files[0]
        stageImage(image)
    }

    return props.user ? (
        <Card className="text-dim">
            <Card.Body style={{ height: "11rem" }} className="pt-1 pb-3 px-3">
                <Form>
                    <Form.Group controlId="blogForm">
                        <Form.Text className="pl-1">Whats on your mind {props.user.name}?</Form.Text>
                        <Form.Control
                            className="card-border text-dim cursor-text no-active-outline"
                            as="textarea"
                            rows={2}
                            placeholder="Type here..."
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    </Form.Group>

                    <ButtonToolbar>
                        <ButtonGroup className="mr-2 card-border rounded">
                            <Button className="pb-2 card-border-right no-active-outline" variant="white" onClick={selectImage}>
                                <Icon.Image fill="dimgrey" />
                                <input onChange={setImage.bind(this)} type="file" id="file" ref={inputRef} style={{ display: "none" }} />
                            </Button>
                            <EmojiPopOver />
                        </ButtonGroup>
                        <ButtonGroup>
                            <AddBlogModal
                                onUpdate={props.onUpdate}
                                crud={props.crud}
                                user={props.user}
                                image={image}
                                stageImage={stageImage}
                                setContent={setContent}
                                content={content}
                            />
                        </ButtonGroup>
                        {image && <div className="pt-2 pl-2">Selected: {image.name}</div>}
                    </ButtonToolbar>
                </Form>
            </Card.Body>
        </Card>
    ) : (
        <Card style={{ height: "11rem" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
                <Spinner className="spinner" animation="border" />
            </Card.Body>
        </Card>
    )
}

const Posts = props => {
    return props.posts ? (
        <Card className="text-dim">
            <Card.Body>
                {props.posts.result
                    .slice(0)
                    .reverse()
                    .map(post => {
                        return (
                            <Accordion key={post._id}>
                                <div>
                                    <div>
                                        <div className="d-flex align-items-baseline">
                                            <Card.Title className="pr-1 mb-0 text-truncate" as={"h6"}>
                                                {post.title}
                                            </Card.Title>
                                        </div>

                                        {post.image && (
                                            <div className="d-flex justify-content-center">
                                                <Card.Img
                                                    style={{
                                                        width: "auto",
                                                        maxWidth: "100%",
                                                        maxHeight: "24rem",
                                                        minWidth: "4rem",
                                                        minHeight: "2rem",
                                                        objectFit: "cover"
                                                    }}
                                                    className="my-3"
                                                    alt="Cover Image"
                                                    src={post.image}
                                                />
                                            </div>
                                        )}
                                        <Card.Text>{post.text}</Card.Text>

                                        <div className="d-flex justify-content-between">
                                            <Col className="d-flex p-0">
                                                <Form.Text>
                                                    <span className="d-flex">
                                                        <Link className="link" to={"profile/" + post.user._id}>
                                                            <Card.Img className="card-border blog-avatar mb-1 mr-2" alt="" src={post.user.image} />
                                                            {post.user.name} {post.user.surname}
                                                        </Link>
                                                    </span>
                                                </Form.Text>
                                            </Col>
                                            <Col className="d-flex justify-content-between pl-2 pr-0">
                                                <div className="pr-1">
                                                    {post.likes.find(like => props.user && like === props.user._id) ? (
                                                        <Form.Text
                                                            style={{ height: "1.35rem" }}
                                                            className="card-border rounded cursor-pointer"
                                                            onClick={async e => {
                                                                await props.crud.posts.unlike(post._id, {
                                                                    id: props.user._id
                                                                })

                                                                props.onUpdate()
                                                            }}
                                                        >
                                                            <span className="px-1 text-dim cursor-pointer">
                                                                <Icon.HeartFill style={{ marginBottom: "0.175rem" }} className="mr-1" fill="#dc3545" />
                                                                {post.likes.length}
                                                            </span>
                                                        </Form.Text>
                                                    ) : (
                                                        <Form.Text
                                                            style={{ height: "1.35rem" }}
                                                            className="card-border rounded cursor-pointer"
                                                            onClick={async () => {
                                                                await props.crud.posts.like(post._id, {
                                                                    id: props.user._id
                                                                })

                                                                props.onUpdate()
                                                            }}
                                                        >
                                                            <span className="pl-1 pr-1 text-dim cursor-pointer">
                                                                <Icon.HeartFill style={{ marginBottom: "0.175rem" }} className="mr-1" fill="lightgrey" />
                                                                {post.likes.length}
                                                            </span>
                                                        </Form.Text>
                                                    )}
                                                </div>
                                                <Accordion.Toggle as="div" eventKey="0">
                                                    <Form.Text style={{ height: "1.35rem" }} className="card-border rounded pl-1 cursor-pointer text-dim">
                                                        <span>
                                                            <Icon.ChatText className="mb-1" />
                                                            <span className="mx-1">{post.comments.length}</span>
                                                            <span className="d-none mr-1 d-sm-inline-block">
                                                                Comment
                                                                {post.comments.length === 0 ? "s" : ""}
                                                                {post.comments.length > 1 ? "s" : ""}
                                                            </span>
                                                        </span>
                                                    </Form.Text>
                                                </Accordion.Toggle>
                                            </Col>
                                            <Col className="d-none d-lg-block text-end p-0">
                                                {post.createdAt === post.updatedAt ? (
                                                    <Form.Text>
                                                        Posted: <ReactTimeAgo date={new Date(post.createdAt)} />
                                                    </Form.Text>
                                                ) : (
                                                    <Form.Text>
                                                        Edited: <ReactTimeAgo date={new Date(post.updatedAt)} />
                                                    </Form.Text>
                                                )}
                                            </Col>
                                        </div>
                                    </div>

                                    {props.user && props.user._id === post.user._id && (
                                        <div className="pt-3">
                                            <ButtonGroup className="card-border rounded">
                                                <EditBlogModal onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                                <RemoveBlogModal onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                            </ButtonGroup>
                                        </div>
                                    )}

                                    {props.user && props.user._id !== post.user._id && props.user.roles && props.user.roles.isAdministrator && (
                                        <div className="pt-3">
                                            <ButtonGroup className="border border-danger rounded">
                                                <EditBlogModal admin={true} onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                                <RemoveBlogModal admin={true} onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                            </ButtonGroup>
                                        </div>
                                    )}

                                    {props.user &&
                                        props.user._id !== post.user._id &&
                                        props.user.roles &&
                                        props.user.roles.isModerator &&
                                        !props.user.roles.isAdministrator && (
                                            <div className="pt-3">
                                                <ButtonGroup className="border border-warning rounded">
                                                    <EditBlogModal moderator={true} onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                                    <RemoveBlogModal moderator={true} onUpdate={props.onUpdate} post={post} crud={props.crud} />
                                                </ButtonGroup>
                                            </div>
                                        )}
                                </div>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="p-0 px-3">
                                        <AddComment onUpdate={props.onUpdate} user={props.user} post={post} crud={props.crud} />
                                        <hr />
                                        <Comments onUpdate={props.onUpdate} user={props.user} crud={props.crud} post={post} />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Accordion>
                        )
                    })
                    .reduce((prev, curr) => [prev, <hr key={uniqid()} />, curr])}
            </Card.Body>
        </Card>
    ) : props.loading ? (
        <Card>
            <Card.Body className="text-center text-dim p-5">
                <Spinner className="spinner" animation="border" />
            </Card.Body>
        </Card>
    ) : (
        <Card>
            <Card.Body className="text-center text-dim p-5">Failed to fetch content!</Card.Body>
        </Card>
    )
}

const Comments = props => {
    return props.post.comments
        .slice(0)
        .reverse()
        .map((comment, index) => {
            return (
                <div key={uniqid()}>
                    <Card.Text className="mb-2">{comment.comment}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Form.Text>
                            <span className="d-flex">
                                <Link className="link" to={"profile/" + comment.user}>
                                    <Card.Img className="card-border blog-avatar mb-1 mr-2" alt="" src={comment.user.image} />
                                    {comment.user.name} {comment.user.surname}
                                </Link>
                            </span>
                        </Form.Text>

                        {comment.createdAt === comment.updatedAt ? (
                            <Form.Text>
                                Posted: <ReactTimeAgo date={new Date(comment.createdAt)} />
                            </Form.Text>
                        ) : (
                            <Form.Text>
                                Edited: <ReactTimeAgo date={new Date(comment.updatedAt)} />
                            </Form.Text>
                        )}
                    </div>
                    {props.user && props.user._id === comment.user._id && (
                        <div className="pt-2">
                            <ButtonGroup className="card-border rounded">
                                <EditCommentModal comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                                <RemoveCommentModal comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                            </ButtonGroup>
                        </div>
                    )}

                    {props.user && props.user._id !== comment.user._id && props.user.roles && props.user.roles.isAdministrator && (
                        <div className="pt-3">
                            <ButtonGroup className="border border-danger rounded">
                                <EditCommentModal admin={true} comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                                <RemoveCommentModal admin={true} comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                            </ButtonGroup>
                        </div>
                    )}

                    {props.user &&
                        props.user._id !== comment.user._id &&
                        props.user.roles &&
                        props.user.roles.isModerator &&
                        !props.user.roles.isAdministrator && (
                            <div className="pt-3">
                                <ButtonGroup className="border border-warning rounded">
                                    <EditCommentModal moderator={true} comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                                    <RemoveCommentModal moderator={true} comment={comment} crud={props.crud} post={props.post} onUpdate={props.onUpdate} />
                                </ButtonGroup>
                            </div>
                        )}
                    {props.post.comments.length - 1 !== index && <hr />}
                </div>
            )
        })
}

const EmojiPopOver = props => {
    return (
        <OverlayTrigger
            rootClose
            trigger="click"
            key={uniqid()}
            placement={"bottom"}
            overlay={
                <Popover id={"emojiPop_"}>
                    <Popover.Title className="bg-white" as="h3">
                        {"Emoji Panel"}
                    </Popover.Title>
                    <Popover.Content>
                        Add clickable emojis here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nulla sapiente voluptatem voluptas dolorum
                        porro explicabo aspernatur pariatur sed eveniet placeat amet vero, ipsam expedita quidem odit adipisci quis facilis!
                    </Popover.Content>
                </Popover>
            }
        >
            {props.append ? (
                <InputGroup.Text as={Button} variant="white" className="bg-white card-border text-dim no-active-outline">
                    <Icon.EmojiLaughing />
                </InputGroup.Text>
            ) : (
                <Button className="pb-2 no-active-outline" variant="white">
                    <Icon.EmojiLaughing fill="dimgrey" />
                </Button>
            )}
        </OverlayTrigger>
    )
}

export default Blogs
