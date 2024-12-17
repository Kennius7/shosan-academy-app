import Hero from "../components/Hero";
import Intro from "../components/Intro";
// import CircularProgressBar from "../components/CircularProgressBar";



const Home = () => {
    return (
        <>
            <Hero/>
            <Intro/>
            {/* <CircularProgressBar 
                percentage={48} 
                radius={80} 
                strokeWidth={8} 
                radiusOffset={8} 
                textSize={18} 
                className={`bg-yellow-800`} 
            /> */}
        </>
    )
}

export default Home
