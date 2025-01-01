import { courses } from "../utils/data";
import { Link } from "react-router-dom";
import TruncateText from "./TruncateText";



const PopularCourses = () => {

    return (
        <section className="w-full flexColCenter">
            <div className="w-full flexCenter sm:mb-10 mb-4 smm:mt-0 mt-6">
                <h2 className="text-secondaryBlue font-semibold text-[25px] text-center">
                    Popular Courses
                </h2>
            </div>
            <div className="w-full flexAround">
                <div className="w-full flex sm:flex-row flex-col sm:justify-around justify-center items-center">
                    {courses.map(course => (
                        <div
                            key={course.id} 
                            className={`border-2 border-slate-300 rounded-[10px] p-[20px] bg-slate-100
                            sm:w-full w-[96%] h-[290px] text-center cursor-pointer sm:mx-2 mx-0 sm:my-0 my-2 flexColCenter`}
                        >
                            <h3 className={`text-secondaryBlue font-medium text-[15px] text-center mb-2`}>
                                {course.name}
                            </h3>
                            <TruncateText 
                                text={course.description} 
                                wordLimit={43} 
                                className={"text-slate-600 font-sans sm:text-[13px] text-[14px] text-center"} 
                            />
                            <Link 
                                to={`/classes/${course.id}`} 
                                className="text-secondaryBlue mt-4 ring-1 ring-secondaryBlue 
                                outline-none rounded-md px-3 bg-slate-200">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;