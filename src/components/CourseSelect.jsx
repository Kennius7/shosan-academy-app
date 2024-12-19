import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../utils/data";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Button from "./Button";



const CourseSelect = () => {
    const { lightBlue, darkBlue } = useContext(MainContext);
    const navigate = useNavigate();
    const { courseId } = useParams();
    const Course = courses.find(p => p.id === Number(courseId));


    return (
        <section className="flexColCenter w-full h-dvh">
            <div className="w-[96%] text-center text-[25px] text-secondaryBlue">
                { Course.name }
            </div>
            <Button 
                btnGradColor1={lightBlue}
                btnGradColor2={darkBlue}
                buttonText={"Back"} 
                onClick={() => navigate(-1)}
                className={`w-[100px] h-[30px] rounded-[16px] text-[16px] mt-10
                shadow-[0px_0px_5px_0px_#0b1f139c] font-semibold text-secondaryYellow`} 
            />
        </section>
    )
}

export default CourseSelect

