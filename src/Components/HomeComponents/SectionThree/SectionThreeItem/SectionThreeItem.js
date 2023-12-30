import './SectionThreeItem.css'
function SectionThreeItem({icon , description}){
    return(
        <>
        <div className="secThreeItem bg-light">
            <img src={icon}  />
            <p className='ms-2' >{description}</p>
        </div>
        
        </>
    )
}
export default SectionThreeItem ;