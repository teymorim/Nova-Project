import { Col, Container, Row } from 'react-bootstrap';
import './AboutHero.css'
import { BsCheckCircle } from "react-icons/bs";
function AboutHero(){
    return(
        <>
        <div className="aboutheroContianer py-5">
            <Container>
                <Row className='row-cols-1 '>
                    <Col md={4}>
                        <img className='img-fluid' src="https://bootstrapmade.com/demo/templates/Nova/assets/img/about.jpg"  />
                    </Col>
                     
                     <Col  md={8}>
                            <h6>Voluptatem dignissimos provident quasi</h6>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

                            <p><BsCheckCircle size='20px' color='#82cbed' /> <b>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>
                            <p><BsCheckCircle size='20px' color='#82cbed' /> <b>Duis aute irure dolor in reprehenderit in voluptate velit.</b></p>
                            <p><BsCheckCircle size='20px' color='#82cbed' /> <b>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>
                     </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default AboutHero;