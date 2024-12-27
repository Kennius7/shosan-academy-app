/* eslint-disable react/prop-types */

import { Loader } from "@mantine/core"


const Button = ({ 
    buttonText, btnGradColor1="#0db915", btnGradColor2="#064709", className, 
    onClick, buttonType="button", isLoading=false, loaderColor="#febb00", disabled=false 
}) =>

    <button 
        type={buttonType}
        disabled={disabled}
        style={{ background: `linear-gradient(180deg, ${btnGradColor1}, ${btnGradColor2})` }} 
        onClick={onClick}
        className={`${className} ${ isLoading ? "px-4" : "px-0"}`}
    >
        <div>
            { buttonText }
        </div>
        <div className={`mt-2 ml-2 ${ isLoading ? "block" : "hidden"}`}>
            <Loader size="xs" variant="dots" color={loaderColor} />
        </div>
    </button>


export default Button

