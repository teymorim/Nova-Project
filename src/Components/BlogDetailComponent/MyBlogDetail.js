import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './MyBlogDetail.css'
import BlogDetailItem from './BlogDetailItem/BlogDetailItem'
function MyBlogDetail(){
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/nova-project-api-fake/db.json')
        .then(response => setData(response.data.blogDetails))

    }, [])
    const idBlog = useParams().idName
    const blogInfo = data.find((blog) => blog.id == idBlog);
    
    
    return(
        <>
        <div className="MyBlogDetailContainer mt-5">
            <Container>
                <Row className='row-cols-1 '>
                    <Col lg={8}>
                    <BlogDetailItem {...blogInfo} />
                    </Col>

                    <Col lg={4}>
                    <h6 className='fs-4 '>Search</h6>
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
export default MyBlogDetail;