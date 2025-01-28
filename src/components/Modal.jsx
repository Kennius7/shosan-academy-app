/* eslint-disable react/prop-types */



const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;
    console.log("Inner Check For Modal...");

    return (
        <div 
            onClick={onClose} 
            className="fixed top-0 left-0 z-[100] w-full h-full bg-[rgba(0, 0, 0, 0.5)] flexCenter"
        >
            <div 
                onClick={ e => e.stopPropagation() } 
                className="bg-white p-[20px] rounded-lg max-w-[450px] w-full 
                shadow-[0px_0px_5px_0px_#faf5aac2] fadeInAnimate"
            >
                <div className="">
                    <h2>{ title }</h2>
                    <button onClick={onClose} className="">&times;</button>
                </div>
                <div className="">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal
