import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SectionFour.css'
import SectionFourItem from './SectionFourItem/SectionFourItem';
function SectionFour(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.blogs))
    } , [])
    return(
        <>
        <div className="sectionFour">
            <Container>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2'>
                    {data.map(item => <Col key={item.id}><SectionFourItem {...item} /></Col>)}
                </Row>
            </Container>
        </div>
        </>
    )
}
export default SectionFour;