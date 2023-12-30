import './BlogItem.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
function BlogItem(props){
    return(
        <>
         <div className="BlogItem my-3">
         <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text> <span className='mainColor'> {props.date}</span> / <span>{props.name}</span> </Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description} 
                </Card.Text>
                <Link to={`/blogCourse/${props.id}`}>Read More <span><IoIosArrowRoundForward /></span></Link>
            </Card.Body>
        </Card>
        <hr />
         </div>
        
        </>
    )
}
export default BlogItem;