import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Hospital = () => {
    const [show, setShow] = React.useState(false);
    const [showalert, setShowAlert] = React.useState(false);
    const [hospitaldata, setHospitalData] = React.useState([]);

    React.useEffect(() => {
        HospitalList();
    }, [])

    const HospitalList = () => {
        axios.get('https://dummyjson.com/carts')
            .then((data) => {
                console.log('data', data)
                setHospitalData(data.data.carts)
            }).catch((err) => {
                console.log('err', err)
            })
    }

    const addHospital = () => {
        axios.post(`${process.env.REACT_APP_HOSPITAL_URL}`, {
            body: 'This makes all sense to me!',
            postId: 3,
            userId: 5,
        }).then((data) => {
            setShowAlert(true)
            console.log('dtaa', data)
            setShow(false)
        }).catch((err) => {
            console.log("err", err)
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Alert show={showalert} variant="success" onClose={() => setShowAlert(false)} dismissible className="custom-alert">
                    <p>Hospital added successfully!</p>
                </Alert>
                <Button className='allbtn' onClick={handleShow}>
                    Add hospital
                </Button>
                <hr></hr>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Hospital</th>
                            <th>Patients</th>
                            <th>Nurses</th>
                            <th>Doctors</th>
                            <th>Beds</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitaldata.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>Lenmed Hospital {item.userId}</td>
                                <td>{item.total}</td>
                                <td>{item.discountedTotal}</td>
                                <td>{item.totalQuantity}</td>
                                <td>{item.userId}</td>
                                <td><Button variant="secondary" size="sm" href={`/managehospital/${item.id}`}>
                                    Manage
                                </Button></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Add Hospital Form</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Hospital name</Form.Label>
                                <Form.Control
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type='date'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='name@example.com'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={addHospital} >
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default Hospital