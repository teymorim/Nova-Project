import { Button, Col, Container, Row } from 'react-bootstrap';
import './MyContact.css'
import { CiLocationOn ,CiPhone  } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import Form from 'react-bootstrap/Form';

function MyContact(){
    return(
        <>
        <div className="MyContact py-5">
            <Container>
                <Row className='row-cols-1 row-cols-lg-2 gy-2'>
                  <Col>
                     <Row className='row-cols-1 gy-2 '>
                        <Col>
                            <p><CiLocationOn size='25px' /></p>
                            <b>Location:</b>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </Col>

                        <Col>
                            <p><CiPhone size='25px' /></p>
                            <b>Email:</b>
                            <p>info@example.com</p>
                        </Col>

                        <Col>
                            <p><MdOutlineEmail size='25px' /></p>
                            <b>Call:</b>
                            <p>+1 5589 55488 55</p>
                        </Col>
                     </Row>
                  </Col>  

                  <Col>
                  <Form className='text-center py-5'>
                        <Row>
                            <Col>
                            <Form.Control  name='firstName' placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control  name='lastName' placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                            <Form.Control  name='subject' placeholder='subject' />
                            </Col>
                        </Row>

                        <Row className='mt-3'>
                            <Col>
                            <Form.Control name='textarea' as="textarea" rows={5} />
                            </Col>
                        </Row>

                        
                            <Button className='mt-4'>Send Message</Button>
                        
                  </Form>
                  </Col>

                </Row>

            </Container>
        </div>
        
        </>
    )
}
export default MyContact;