import axios from 'axios';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Pencil, Trash } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const ManageNurses = () => {
    const [Nursedata, setNurseData] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [showForDelete, setShowForDelete] = React.useState(false);
    const [showForAdd, setShowForAdd] = React.useState(false);
    const [NurseName, setNurseName] = React.useState('');
    const [Department, setDepartment] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Contact, setContact] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const [nurseId, setNurseID] = React.useState('');


    const handleShowForDelete = (item) => {
        setNurseID(item.id)
        setShowForDelete(true)
    };


    const handleShowForAdd = () => setShowForAdd(true);

    const handleCloseForDelete = () => setShowForDelete(false);

    const handleCloseForAdd = () => setShowForAdd(false);

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        // console.log('itemmm', item)
        setNurseName(`Nurse ${item.id}`)
        setDepartment(`Gynaecology`)
        setContact(`${item.userId}${item.discountedTotal}`)
        setEmail(`Nurse${item.id}@gmail.com`)
        setAddress(`#${item.userId} Indus Valley`)
        setShow(true)
    };

    React.useEffect(() => {
        NurseList();
    }, [])

    const NurseList = () => {
        axios.get('https://dummyjson.com/carts')
            .then((data) => {
                // console.log('data', data)
                setNurseData(data.data.carts)
            }).catch((err) => {
                console.log('err', err)
            })
    }


    const AddNurse = () => {
        axios.get('https://dummyjson.com/carts')
            .then((data) => {
                setShowForAdd(false)
                console.log('data', data)
            }).catch((err) => {
                console.log('err', err)
            })
    }

    const RemoveNurse = () => {
        axios.get(`https://dummyjson.com/carts/${nurseId}`)
            .then((data) => {
                setShowForDelete(false)
                setShowAlert(true)
                // console.log('data', data)
                setNurseData(Nursedata => Nursedata.filter((u) => u.id !== nurseId))
            }).catch((err) => {
                console.log('err', err)
            })
    }

    return (
        <>
            <Container>
                <Button className='allbtn' onClick={handleShowForAdd}>
                    Add nurse
                </Button>
                <hr></hr>
                <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible className="custom-alert">
                    <p>Nurse deleted successfully!</p>
                </Alert>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Nurse name</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Nursedata.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>Nurse {item.id}</td>
                                <td>{item.userId}{item.discountedTotal}</td>
                                <td>#{item.userId} Indus Valley</td>
                                <td>Gynaecology</td>
                                <td>Nurse{item.id}@gmail.com</td>
                                <td className='actionbtn'>
                                    <Pencil size={13} onClick={e => handleShow(item)} />

                                    <Trash size={13} onClick={e => handleShowForDelete(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modification Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={NurseName}
                                    autoFocus
                                    onChange={e => setNurseName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    value={Contact}
                                    autoFocus
                                    onChange={e => setContact(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    value={Address}
                                    autoFocus
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={Email}
                                    type='email'
                                    placeholder='name@example.com'
                                    autoFocus
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Department</Form.Label>
                                <Form.Control
                                    value={Department}
                                    autoFocus
                                    onChange={e => setDepartment(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success">
                            Done
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showForDelete} onHide={handleCloseForDelete}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>Are you sure, you want to delete this nurse?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseForDelete}>
                            No
                        </Button>
                        <Button variant="danger" onClick={RemoveNurse}>
                            Delete!
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showForAdd} onHide={handleCloseForAdd}>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Add Nurse Form</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={NurseName}
                                    autoFocus
                                    onChange={e => setNurseName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    value={Contact}
                                    autoFocus
                                    onChange={e => setContact(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    value={Address}
                                    autoFocus
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={Email}
                                    type='email'
                                    placeholder='name@example.com'
                                    autoFocus
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Department</Form.Label>
                                <Form.Control
                                    value={Department}
                                    autoFocus
                                    onChange={e => setDepartment(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseForAdd}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={AddNurse}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>

        </>
    )
}

export default ManageNurses