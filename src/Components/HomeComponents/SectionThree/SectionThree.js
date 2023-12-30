import { Button, Col, Container, Row } from 'react-bootstrap';
import './SectionThree.css'
import imageSec3 from '../../../Assests/Images/iphone.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SectionThreeItem from './SectionThreeItem/SectionThreeItem';
function SectionThree(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.featuresHomePage))
    } , [])
    return(
        <>
        <div className="secThreeContainer py-5">
            <Container> 
            <Row className='row-cols-1 gy-2'>
                <Col xl={7}>
                    <h6 className='fs-3'>Powerful Features for <br /> Your Business</h6>
                   <Row className='row-cols-1 row-cols-lg-2 gy-2 mt-4'>
                        {data.map(item => <Col key={item.id}><SectionThreeItem {...item} /></Col>)}
                   </Row>

                    <br />
                    <br />
                    <br />
                    <br />
                    <h6 className='fs-3'>Labore Sdio Lidui <br /> Bonde Naruto</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias doloremque quae delectus odit minima corrupti blanditiis quo animi!</p>
                    <Button className='mb-5'>Get Start</Button>
                    
                </Col>


                <Col xl={5}>
                    <img src={imageSec3} alt="" />
                </Col>
            </Row>
            </Container>
        </div>
        
        </>
    )
}
export default SectionThree;