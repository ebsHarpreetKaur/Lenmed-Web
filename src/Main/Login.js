import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [pwd, setPassword] = React.useState('');
    const [show, setShow] = React.useState(false);


    const UserLogin = async () => {
        await axios.post(`${process.env.REACT_APP_LOGIN_URL}`, {
            username: 'kminchelle',
            password: '0lelplR',
        }).then((data) => {
            if (data) {
                setShow(true)
                console.log("data", data)
                const userdata = {
                    id: data.data.id,
                    username: data.data.username,
                    email: data.data.email,
                    image: data.data.image,
                    firstName: data.data.firstName,
                    gender: data.data.gender,
                    lastName: data.data.lastName
                }
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', JSON.stringify(userdata));
                window.location.reload();
                navigate('/')
            }
        }).catch((error) => {
            console.log("error", error)
        })
    }

    return (
        <>
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible className="custom-alert">
                <p>Login success</p>
            </Alert>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <div
                            className="modal show"
                            style={{ display: 'block', position: 'initial' }}
                        >
                            <Modal.Dialog>
                                <Modal.Header className="d-flex justify-content-center">
                                    <Modal.Title>Login</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>

                                        <Button className='allbtn' onClick={UserLogin}>
                                            Login
                                        </Button>
                                    </Form>
                                </Modal.Body>

                            </Modal.Dialog>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Login