import './TeamItem.css'
function TeamItem({name , image , skill}){
    return(
        <>
        <div className="TeamItemContainer py-5 text-center ">
            <img className='img-fluid rounded' src={image} />
            <h6 className='fs-4 my-2'>{name}</h6>
            <p className='opacity-75'>{skill}</p>
        </div>
        
        </>
    )
}
export default TeamItem;