import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ServicesPlace.css'
import ServicesPlaceItem from './ServicesPlaceItem/ServicesPlaceItem';
function ServicesPlace(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.servicesPlces))
    } , [])
    return(
        <>
        <div className="ServicesPlace py-5">
            <Container>
                <Row className='row-cols-1 row-cols-lg-2 gy-2'>
                    {data.map(item => <Col key={item.id}><ServicesPlaceItem {...item} /></Col>)}
                </Row>
            </Container>
        </div>
        
        </>
    )
}
export default ServicesPlace ;