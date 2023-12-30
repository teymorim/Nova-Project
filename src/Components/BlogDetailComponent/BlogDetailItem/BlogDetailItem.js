import './BlogDetailItem.css'
import { FaRegCommentDots , FaRegClock  } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
function BlogDetailItem(props){
    return(
        <>
            <div className="BlogDetailItem mb-3 rounded overflow-hidden">
                <img className='img-fluid ' src={props.image} alt="" />
                <h6 className="fs-3 p-3">{props.title}</h6>
                <div className="information p-3 d-flex">
                    <p className='mx-2 d-flex align-items-center'><IoPersonCircleOutline size='19px' className='me-2 mainColor' /> {props.name}</p>
                    <p className='mx-2 d-flex align-items-center'><FaRegClock size='19px' className='me-2 mainColor' /> {props.date}</p>
                    <p className='mx-2 d-flex align-items-center'><FaRegCommentDots size='19px' className='me-2 mainColor' /> {props.commentCount} Comments</p>
                </div>
                <p className='p-3'>{props.description}</p>
                <p className='p-3'>{props.explain}</p>
                <p className='p-3'>{props.explain2}</p>
                <p className='p-3'>{props.explain3}</p>
            </div>
        </>
    )
}
export default BlogDetailItem;