import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AdminDashboardCards = () => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '14rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Beds</Card.Title>
                <Card.Text>2303</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Nurses</Card.Title>
                <Card.Text>856</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Patients</Card.Title>
                <Card.Text>3404</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Doctors</Card.Title>
                <Card.Text>647</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default AdminDashboardCards