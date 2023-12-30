import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MyServices.css'
import MyServicesItem from './MyServicesItem/MyServicesItem';
function MyServices(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.oureServices))
    } , [])
    return(
        <>
        <div className="MyServicesContainer py-5">
            <Container>
                <h1>Our Services</h1>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2'>
                    {data.map(item => <Col key={item.id}><MyServicesItem {...item} /></Col>)}
                </Row>
            </Container>
        </div>
        
        </>
    )
}
export default MyServices;