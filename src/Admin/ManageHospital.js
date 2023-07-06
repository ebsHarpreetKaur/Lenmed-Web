import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ManageHospital = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const HandleNurses = () => {
        navigate(`/managehospital/${id}/managenurses`)
    }

    const handleDoctors = () => {
        navigate(`/managehospital/${id}/managedoctors`)
    }


    return (
        <>
            <Container>
                <Button className='allbtn' onClick={HandleNurses}>
                    Nurses
                </Button>
                {' '}
                <Button className='allbtn' onClick={handleDoctors}>
                    Doctors
                </Button>
                {' '}
                <Button className='allbtn'>
                    Equipments
                </Button>
                {' '}
                <Button className='allbtn'>
                    Supervisors
                </Button>
            </Container>

        </>
    )
}

export default ManageHospital