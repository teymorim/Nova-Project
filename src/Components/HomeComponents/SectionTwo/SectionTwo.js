import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './SectionTwo.css' 
import SectionTwoItem from './SectionTwoItem/SectionTwoItem';
function SectionTwo(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.oureServices))
    } , [])
    return(
        <>
        <div className="sectionTwo my-2">
            <Container>
                <Row className='row-cols-1 row-cols-md-3 gy-2'>
                    {data.map( item => <Col key={item.id}><SectionTwoItem {...item} /></Col>)}
                </Row>
            </Container>

            <div className="sectionTwoDesc mt-5">
                   <Container className='d-flex flex-column justify-content-center align-items-center p-5'>
                    <h6 className='text-light fs-2'>Ut fugiat aliquam aut non</h6>
                    <p className='text-light'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                        <Button>Call To Action</Button>
                   </Container>
            </div>
        </div>
        </>
    )
}
export default SectionTwo;