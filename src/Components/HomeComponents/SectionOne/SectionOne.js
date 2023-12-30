import { Col, Container, Row } from "react-bootstrap";
import imageSection1 from '../../../Assests/Images/why-us-bg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionOneItem from "./SectionOneItem/SectionOneItem";
import './SectionOne.css'
function SectionOne(){
    return(
        <>
          <div className="section-slider ">
                    <Container className='my-4' style={{backgroundColor: '#f0f0f0'}}>
                        <Row className='row-cols-1 '>
                            <Col xl={5}>
                                <img className='img-fluid' src={imageSection1} alt="" />
                            </Col>

                            <Col xl={7} className='d-flex align-items-center justify-content-center'>
                            <Swiper
                            className='p-5'
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                               
                                >
                                    <SwiperSlide>
                                        <SectionOneItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <SectionOneItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <SectionOneItem />
                                    </SwiperSlide>
                                    
                            </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </div>
        
        </>
    )
}
export default SectionOne;