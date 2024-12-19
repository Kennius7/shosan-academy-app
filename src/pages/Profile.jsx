import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import ProfileHero from "../components/ProfileHero";
import NotLoggedProfile from "../components/NotLoggedProfile";
import ProfileSection from "../components/ProfileSection";
import MiniHero from "../components/MiniHero";



const Profile = () => {
    const { isLoggedIn } = useContext(MainContext);

    return (
        <>
            { 
                isLoggedIn 
                ?
                <>
                    <ProfileHero/>
                    <ProfileSection/>
                </>
                : 
                <>
                    <MiniHero subText="Join us and enjoy all that we are" />
                    <NotLoggedProfile/>
                </>
            }
        </>
    )
}

export default Profile;

