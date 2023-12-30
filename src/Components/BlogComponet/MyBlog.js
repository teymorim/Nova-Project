import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BlogItem from './BlogItem/BlogItem';
import { CiSearch } from "react-icons/ci";
import './MyBlog.css'
function MyBlog(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.blogs))
    } , [])
    return(
        <>
        <div className="MyBlogContainer">
            <Container>
                <Row className='row-cols-1 gy-2 '>
                    <Col md={8}>
                        <Row className='row-cols-1 row-cols-lg-2 gy-2 '>
                        {data.map(item => <Col key={item.id} ><BlogItem {...item} /></Col> )}
                        </Row>
                    
                        <div className="paginationBlog">
                            <nav aria-label="Page navigation  example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h6 className='fs-4 mt-2'>Search</h6>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name='search'
                            />
                            <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                        </InputGroup>

                        <div className="categories mt-5">
                            <h6 className='fs-4 mb-3'>Categories</h6>
                            <p className='opacity-75'>General (25)</p>
                            <p className='opacity-75'>Lifestyle (12)</p>
                            <p className='opacity-75'>Travel (5)</p>
                            <p className='opacity-75'>Design (22)</p>
                            <p className='opacity-75'>Creative (8)</p>
                            <p className='opacity-75'>Educaion (14)</p>
                        </div>

                        <div className="tags">
                            <h6 className="fs-4 mb-3">Tags</h6>
                            <div className="tags-item d-flex flex-wrap">
                                <p className='m-1 border p-2  '>App</p>
                                <p className='m-1 border p-2  '>IT</p>
                                <p className='m-1 border p-2  '>Business</p>
                                <p className='m-1 border p-2  '>Mac</p>
                                <p className='m-1 border p-2 '>Design</p>
                                <p className='m-1 border p-2  '>Office</p>
                                <p className='m-1 border p-2  '>Studio</p>
                                <p className='m-1 border p-2  '>Marketing</p>
                            </div>
                        </div>
                    
                    </Col>
                </Row>
            
            </Container>
        </div>
        </>
    )
}
export default MyBlog;