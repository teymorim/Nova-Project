import { toHaveDescription } from '@testing-library/jest-dom/matchers';
import './ServicesPlaceItem.css'
function ServicesPlaceItem({image , title , description}){
    return(
        <>
        <div className="ServicesPlaceItem bg-light d-flex align-items-center">
            <div className="ServicesPlaceItem-img">
                <img style={{height: '300px' , width: '200px'}}  src={image}  />
            </div>
            <div className="ServicesPlaceItem-desc ms-4">
                <h6 className="fs-4">
                    {title}
                </h6>

                <p className="opacity-75">
                    {description}
                </p>
            </div>
        </div>
        
        </>
    )
}
export default ServicesPlaceItem;