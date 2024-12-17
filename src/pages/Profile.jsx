import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import ProfileHero from "../components/ProfileHero";
import NotLoggedProfile from "../components/NotLoggedProfile";



const Profile = () => {
    const { isLoggedIn } = useContext(MainContext);

    return (
        <>
            { 
                isLoggedIn 
                ?
                <div>
                    <ProfileHero/>
                </div>
                : <NotLoggedProfile/>
            }
        </>
    )
}

export default Profile;

