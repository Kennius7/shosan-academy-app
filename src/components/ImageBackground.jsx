/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Overlay } from "@mantine/core";
import { PiPencil } from "react-icons/pi";
import { MainContext } from "../context/mainContext";



const ImageBackground = ({ 
    children, BGWidth="100%", BGHeight="200px", className, onClickEditPics,
    imgSrc, childClass, isOverlay=false, overlayOpacity=0.7, overlayColor="black", isEditPicture=false
}) => {

    const { darkBlue } = useContext(MainContext);

    return (
        <div style={{ width: BGWidth, height: BGHeight }} className={`relative ${className}`}> 
            <img src={imgSrc} alt="cover pics" className="w-full h-full object-cover"/>
            {
                isEditPicture && (
                    <div 
                        onClick={onClickEditPics} 
                        className="absolute xs:left-[160px] left-[100px] xs:top-[215px] top-[90px] 
                        z-[3] xs:w-8 w-6 xs:h-8 h-6 rounded-full bg-slate-200 flexCenter">
                        <PiPencil
                            size={20} 
                            color={darkBlue} 
                            style={{ 
                                width: window.innerWidth > 500 ? 25 : 17, 
                                height: window.innerWidth > 500 ? 25 : 17 
                            }} 
                            className={`cursor-pointer`}
                        />
                    </div>
                )
            }
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



