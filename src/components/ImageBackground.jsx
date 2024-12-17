/* eslint-disable react/prop-types */
import { Overlay } from "@mantine/core";



const ImageBackground = ({ 
    children, BGWidth="100%", BGHeight="200px", className, 
    imgSrc, childClass, isOverlay=false, overlayOpacity=0.7, overlayColor="black" 
}) => {

    return (
        <div style={{ width: BGWidth, height: BGHeight }} className={`relative ${className}`}> 
            <img src={imgSrc} alt="cover pics" className="w-full h-full object-cover"/>
            {
                isOverlay 
                ?
                    <Overlay color={overlayColor} opacity={overlayOpacity} zIndex={1} />
                : null
            }
            <div className={`absolute z-[2] ${childClass}`}>
                { children }
            </div>
        </div>
    )
}


export default ImageBackground



