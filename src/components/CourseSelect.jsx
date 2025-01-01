import { useParams } from "react-router-dom";
import CourseSection from "./CourseSection";
import MiniHero from "./MiniHero";
import { courses } from "../utils/data";


const CourseSelect = () => {
    const { courseId } = useParams();
    const Course = courses.find(p => p.id === Number(courseId));

    return (
        <>
            <MiniHero mainText={Course.name} subText={"Video Course Topics"} />
            <CourseSection/>
        </>
    )
}

export default CourseSelect

