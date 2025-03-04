import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import SignInAuth from "../components/SignInAuth";
import SignUpAuth from "../components/SignUpAuth";



const Login = () => {

    const { loginState } = useContext(MainContext);

    return (
        <section className="flexCenter w-full h-dvh bg-slate-200">
            { !loginState ? <SignInAuth/> : <SignUpAuth/> }
        </section>
    )
}

export default Login