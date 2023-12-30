import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutTeam.css'
import TeamItem from './TeamItem/TeamItem';
function AboutTeam(){
    const [data , setData] = useState([])
    useEffect(() =>{
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.team) )
    } , [])
    return(
        <>
        <div className="aboutTeamContainer">
            <Container>
                <h1>Our Team</h1>

                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2'>
                    {data.map(item => <Col key={item.id}><TeamItem {...item} /></Col>)}
                    
                </Row>
            </Container>
        </div>
        
        </>
    )
}
export default AboutTeam;