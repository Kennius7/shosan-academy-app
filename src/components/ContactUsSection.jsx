import { Logo } from "../assets"



const ContactUsSection = () => {

    return (
        <section className="w-full flexColCenter">
            <div className="sm:w-[50%] w-[90%] flexColCenter mt-10">
                <div className="w-full flexColCenter">
                    <div className="w-full flexCenter">
                        <img src={Logo} alt="Logo" className="w-7 h-7 object-cover rounded-full" />
                        <div className="font-semibold text-secondaryBlue text-[20px] pl-2">
                            Have questions?
                        </div>
                    </div>
                    <div className="flexColCenter w-full mt-2">
                        <hr className="border-[1px] border-black/30 w-[80%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[60%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[40%] mb-[1px]" />
                        <hr className="border-[1px] border-black/30 w-[20%] mb-[1px]" />
                    </div>
                </div>
                <div className="w-[96%] flexCenter mt-4 border border-secondaryBlue rounded-xl p-4 bg-slate-100">
                    <div className="text-[15px] font-EncodeSans">
                        Have questions or need more information? Feel free to reach out to us 
                        at the channels below. We&apos;d love to hear from you!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection


