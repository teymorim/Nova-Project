import './MyServicesItem.css'
function MyServicesItem({icon , description , title}){
    return(
        <>
        <div className="MyServicesItem d-flex align-items-start justify-content-center bg-light p-4 rounded ">
            <div className="MyServicesItem-image">
                <img  src={icon} alt="" />
            </div>
            <div className="MyServicesItem-description ms-3">
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
        </>
    )
}
export default MyServicesItem ;