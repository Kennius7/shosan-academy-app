

import { webDesignBasicPics, reactPics, reactNativePics, nodePics } from "../assets";

export const navLinks = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about_us" },
    { name: "classes", link: "/classes" },
    { name: "contact us", link: "/contact" },
    { name: "my profile", link: "/profile" },
];

export const selectCourses = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Web Design Basics' },
    { id: 2, name: 'Front End Development' },
    { id: 3, name: 'Back End Development' },
    { id: 4, name: 'Mobile App Development' },
];

const courseDesc = {
    webBasic: "This course covers the rudiments of web design; HTML, CSS and popular CSS frameworks, Bootstrap and TailwindCSS, and then finally Javascript, a proper programming language. If you wish to begin your journey into web based programming, this is your best choice",
    frontEnd: "Want to furnish your skills and become proficient in React? Then this is the course for you. This covers React as a framework of Javascript, after solidying your foundation in web design basics, and establish your front end skills as a web developer. By the end of this course you can apply for any front end role in companies and start ups.",
    backEnd: "In web app development, there is usually the front end or client side of the application, and the back end or server side. If your interest is in server side programming, with NodeJs as the language of choice, then this course is for you. This course covers NodeJs, ExpressJS, and MongoDB.",
    mobile: "Mobile app development is on demand right now and if that's your choice on the path to greatness then this course can guide you to your destination. This course covers React Native, a styled framework similar to React but built for mobile devices. By the end of this course, you can confidently boast of your mobile app building prowess.",
}

export const courses = [
    { id: 0, name: 'Web Design Basics', formerPrice: 200000, price: 20000, duration: '8 weeks', alt: 'Web Design Pics', picsRep: webDesignBasicPics, description: courseDesc.webBasic, },
    { id: 1, name: 'Front End Development (React)', formerPrice: 300000, price: 30000, duration: '12 weeks', alt: 'React Pics', picsRep: reactPics, description: courseDesc.frontEnd, },
    { id: 2, name: 'Back End Development (Node.js)', formerPrice: 300000, price: 30000, duration: '12 weeks', alt: 'Back End Pics', picsRep: nodePics, description: courseDesc.backEnd, },
    { id: 3, name: 'Mobile App Development (React Native)', formerPrice: 300000, price: 30000, duration: '12 weeks', alt: 'Mobile design Pics', picsRep: reactNativePics, description: courseDesc.mobile, },
];

export const lessons = [
    { id: 1, name: 'Mathematics 101', time: 'Monday 9:00 AM - 11:00 AM' },
    { id: 2, name: 'Physics 201', time: 'Tuesday 9:00 AM - 12:00 PM' },
    { id: 3, name: 'Chemistry 301', time: 'Friday 1:00 PM - 3:00 PM' },
    { id: 4, name: 'Biology 401', time: 'Thursday 2:00 PM - 4:00 PM' },
    { id: 5, name: 'Computer Science 101', time: 'Friday 11:00 AM - 1:00 PM' },
    { id: 6, name: 'Geography 102', time: 'Monday 9:00 AM - 11:00 AM' },
    { id: 7, name: 'Further Maths 202', time: 'Tuesday 10:00 AM - 12:00 PM' },
    { id: 8, name: 'Agriculture 302', time: 'Friday 1:00 PM - 3:00 PM' },
    { id: 9, name: 'History 402', time: 'Thursday 2:00 PM - 4:00 PM' },
    { id: 10, name: 'Economics 102', time: 'Friday 11:00 AM - 1:00 PM' },
    { id: 11, name: 'Phy. Education 103', time: 'Monday 9:00 AM - 11:00 AM' },
    { id: 12, name: 'Social Studies 203', time: 'Tuesday 7:00 AM - 12:00 PM' },
    { id: 13, name: 'French 303', time: 'Friday 1:00 PM - 3:00 PM' },
    { id: 14, name: 'Christian Studies 403', time: 'Thursday 2:00 PM - 4:00 PM' },
    { id: 15, name: 'Igbo Language 103', time: 'Friday 11:00 AM - 1:00 PM' },
];

export const getYear = (dateString) => {
    const fullYear = new Date(dateString).getUTCFullYear();
    return fullYear;
}

export const monthFunct = (mon) => {
    if (mon <= 9) {
        return `0${mon + 1}`;
    } else return mon;
}

export const dayFunct = (day) => {
    if (day <= 9) {
        return `0${day}`;
    } else return day;
}

export const hourFunct = (hr) => {
    if (hr <= 9) {
        return `0${hr}`;
    } else return hr;
}

export const minuteFunct = (min) => {
    if (min <= 9) {
        return `0${min}`;
    } else return min;
}

export const secFunct = (sec) => {
    if (sec <= 9) {
        return `0${sec}`;
    } else return sec;
}


export const handleCourseSelection = (course, courseState, setCourseState, scheduleState, setScheduleState) => {
    if (courseState.includes(course.id)) {
        setCourseState(courseState.filter((id) => id !== course.id));
        const updatedSchedule = { ...scheduleState };
        delete updatedSchedule[course.id];
        setScheduleState(updatedSchedule);
    } else {
        setCourseState([...courseState, course.id]);
        setScheduleState({ ...scheduleState, [course.id]: course.time });
    }
};









