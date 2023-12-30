import { Button, Col, Container, Row } from 'react-bootstrap'
import './MyFooter.css'
import { FaArrowUp } from "react-icons/fa";


function MyFooter(){
    const TopBtnHandler = () => {
        window.scrollTo({
            top: 0
        })
    }
    return(
        <>
            <div className="MyFooterContainer bg-light py-5">
                <Container>
                    <Row className='row-cols-1 gy-3'>
                        <Col className='d-flex flex-column align-items-start justify-content-start' lg={6}>
                            <h6 className='fs-2'>Nova</h6>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. <br /> Justo eget nada terra videa magna derita valies <br /> darta donna mare fermentum iaculis eu non diam phasellus.</p>

                        </Col>

                        <Col className='d-flex flex-column align-items-start justify-content-start' lg={2}>
                            <h6 className='fs-5'>Useful Links</h6>
                            <span>- Home</span>
                            <span>- About us</span>
                            <span>- Services</span>
                            <span>- Terms of service</span>
                            <span>- Privacy policy</span>
                        </Col>

                        <Col className='d-flex flex-column align-items-start justify-content-start' lg={2}>
                        <h6 className='fs-5'>Our Services</h6>
                            <span>- Web Design</span>
                            <span>- Web Development</span>
                            <span>- Product Management</span>
                            <span>- Marketing</span>
                            <span>- Graphic Design</span>
                        
                        </Col>

                        <Col className='d-flex flex-column align-items-start justify-content-start' lg={2}>
                        <h6 className='fs-5'>Contact Us</h6>

                        <p>
                            A108 Adam Street <br />
                            New York, NY 535022 <br /> 
                            United States
                        </p>

                        <Button onClick={TopBtnHandler}>Back To Top <b ><FaArrowUp /></b></Button>
                        
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default MyFooter