import './SectionTwoItem.css'
function SectionTwoItem({icon , description , title}){
    return(
        <>
        <div className="sectionTwoItem d-flex align-items-start justify-content-center bg-light p-4 rounded ">
            <div className="image">
                <img  src={icon} alt="" />
            </div>
            <div className="description ms-3">
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
        </>
    )
}
export default SectionTwoItem ;