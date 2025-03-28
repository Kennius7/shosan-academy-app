/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { BG1 } from "../assets";
import ImageBackground from "./ImageBackground";
import Modal from "./Modal";
import Button from "./Button";
import { toast } from "react-toastify";
// import { db } from "../../FirebaseConfig";
// import { uploadPics } from "../utils/data";




const ProfileHero = () => {
    const { profileFormData, lastVisitedTime, darkBlue, lightBlue, uploadPics, downloadData, setProfileFormData } = useContext(MainContext);
    const { id, name, profilePics } = profileFormData;

    const [isShow, setIsShow] = useState(false);
    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(1);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadText, setUploadText] = useState("Upload Picture");
    // const [isGetImageURL, setIsGetImageURL] = useState(false);

    const titleText = "Please select an image";
    const cloudinaryURL = "https://api.cloudinary.com/v1_1/dpo6cr2fi/image/upload";
    // const apiFetchUrl = import.meta.env.VITE_API_FETCH_DATA_URL;
    let progressWidthValue = progress.toString() + "%";

    const handleFileChange = (event) => { 
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setTimeout(() => { console.log("Preview Pics:", URL.createObjectURL(file), "Image Content:", file) }, 3000);
        }
    }

    const handleUpload = async () => {
        if (!image) {
            return toast(`Please select an image to upload.`, { type: "warning" } );
        }
        setUploadText("Uploading Picture");
        setIsUploading(!isUploading);

        const DP_FormData = new FormData();
        DP_FormData.append("file", image);
        DP_FormData.append("upload_preset", "shosan-acodemia-app");
        DP_FormData.append("folder", "Profile_Pics");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", cloudinaryURL);

        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
                const percentComplete = Math.round((e.loaded / e.total) * 100);
                setProgress(percentComplete);
            }
        }

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                setImageURL(response.secure_url);
                toast(`Picture saved!`, { type: "success" } );
                // setIsGetImageURL(true);
                setProgress(0);
                // uploadPics(db, imageURL, apiFetchUrl, id, setProfileFormData, setUploadText, setIsUploading);
                uploadPics(id, response.secure_url);
                setTimeout(() => { 
                    downloadData();
                    setIsUploading(false);
                }, 2000);
            } else { toast(`Failed to save picture. Please try again.`, { type: "error" } ) }
        }

        xhr.onerror = () => {
            console.error("Error uploading image");
            toast(`Error uploading picture.`, { type: "error" } );
        }

        xhr.send(DP_FormData);

    }

    // console.log("Profile Pics Url:>>>>", profilePics);

    // useEffect(() => {
    //     if (isGetImageURL) {
    //     }
    // }, [imageURL])

    const handleClose = () => {setIsShow(false); setPreview(null)}
    const handlePictureEdit = () => {setIsShow(true); setPreview(null)}

    return (
        <section className="flexColStart w-full bg-white pt-[60px]">
            <ImageBackground 
                BGHeight={ 
                    window.innerWidth > 768 ? "300px" 
                    : window.innerWidth < 768 
                    && window.innerWidth > 500 ? "220px" : "140px" 
                }
                imgSrc={BG1} 
                isOverlay={true}
                isEditPicture={true}
                onClickEditPics={handlePictureEdit}
                overlayOpacity={0.9}
                className="flexCenter w-full" 
                childClass={`sm:top-[200px] top-[80px] left-2 sm:w-[200px] sm:h-[200px] w-[120px] h-[120px] 
                rounded-full overflow-hidden border-[5px] border-white bg-secondaryBlue`}
            >
                <img 
                    src={ profilePics } 
                    alt="dp" 
                    className={`w-full h-full object-cover`} 
                />
            </ImageBackground>
            <div className="w-full h-[40px] sm:mt-[120px] mt-[65px] flexColCenterStart pl-2">
                <p className="text-secondaryBlue sm:text-[25px] text-[18px] font-semibold text-start leading-[28px]">
                    {name}
                </p>
                <p className="font-sans text-black sm:text-[14px] text-[12px] sm:leading-[28px] leading-[14px]">
                    Last time here:&nbsp;
                    <span className="font-sans text-secondaryBlue sm:text-[14px] text-[12px] 
                        sm:leading-[28px] leading-[14px]">
                        {lastVisitedTime}
                    </span>
                </p>
            </div>
            <Modal show={isShow} onClose={handleClose} title={titleText} >
                <div className="w-full sm:h-[250px] xs:h-[300px] h-[230px] flexCenter xs:mt-3 mt-1">
                    <div className="w-full flex flex-col justify-around items-end">
                        <input 
                            key={image ? image.name : "default"}
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            className="w-full mb-4" 
                        />
                        <div className={`w-full xs:h-[180px] h-[150px] flex flex-row items-end 
                            ${preview ? "justify-between" : "justify-end"}`}>
                            {
                                preview ? (
                                    <div className="flex flex-col justify-around items-start">
                                        <h3 className="xs:text-[18px] text-[15px]">
                                            Preview:
                                        </h3>
                                        <img 
                                            src={preview} 
                                            alt="Selected Preview" 
                                            className="xs:w-[150px] w-[120px] xs:h-[150px] h-[120px] object-cover" 
                                        />
                                    </div>
                                ) : (
                                    <div className="xs:w-[150px] w-[120px] xs:h-[150px] h-[120px]"></div>
                                )
                            }
                            <div className="w-[200px] flex flex-row justify-end">
                                <Button 
                                    btnGradColor1={lightBlue}
                                    btnGradColor2={darkBlue}
                                    onClick={handleUpload}
                                    isLoading={isUploading}
                                    buttonText={uploadText} 
                                    className={`h-[35px] rounded-[16px] text-[14px] flexAround
                                    shadow-[0px_0px_5px_0px_#0b1f139c] font-medium text-white 
                                    transition-all duration-300 ${isUploading ? "w-[180px]" : "w-[140px]"}`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isUploading && (
                        <div className="w-full h-[20px] bg-slate-300 rounded-lg flex flex-row 
                            justify-center items-center">
                            <div className="w-[98%] justify-start items-center">
                                <div 
                                    style={{ width: progressWidthValue, height: "12px" }} 
                                    className={`bg-slate-600 rounded`}
                                >
                                </div>
                            </div>
                        </div>
                    )
                }
            </Modal>
        </section>
    )
}

export default ProfileHero
