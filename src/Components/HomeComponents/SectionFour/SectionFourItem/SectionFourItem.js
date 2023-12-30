import './SectionFourItem.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
function SectionFourItem(props){
    return(
        <>
         <div className="secFourItem my-3">
         <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text> <span className='mainColor'> {props.date}</span> / <span>{props.name}</span> </Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description} 
                </Card.Text>
                <Link to={'/blog'}>Read More <span><IoIosArrowRoundForward /></span></Link>
            </Card.Body>
        </Card>
         </div>
        
        </>
    )
}
export default SectionFourItem;