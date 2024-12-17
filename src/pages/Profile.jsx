import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import ProfileHero from "../components/ProfileHero";
import NotLoggedProfile from "../components/NotLoggedProfile";
import ProfileSection from "../components/ProfileSection";



const Profile = () => {
    const { isLoggedIn } = useContext(MainContext);

    return (
        <>
            { 
                isLoggedIn 
                ?
                <div>
                    <ProfileHero/>
                    <ProfileSection/>
                </div>
                : <NotLoggedProfile/>
            }
        </>
    )
}

export default Profile;

