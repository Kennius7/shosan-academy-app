import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";



const Footer = () => {
    const FBLink = "https://web.facebook.com/profile.php?id=61550277522083";
    const InstagramLink = "https://www.instagram.com/shosan_code_hub/";
    const TwitterLink = "https://x.com/shosan_code_hub";
    const LinkedInLink = "https://www.linkedin.com/in/shosan-boggs-b766b7354/";


    return (
        <footer className="bg-secondaryBlue text-white py-8">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <Link to="/" className="flex xs:justify-normal justify-center items-center mb-4">
                        <img
                            src={Logo}
                            alt="logo" 
                            className="w-[35px] h-[35px] rounded-full shadow-[0px_0px_5px_0px_#faf5aac2]" 
                        />
                        <h2 className="text-xl font-bold ml-2">
                            Shosan Code Hub
                        </h2>
                    </Link>
                    <p className="text-gray-300">
                        Empowering the next generation of developers through world-class education.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li><Link to="/about_us" className="text-gray-300 hover:text-white">About Us</Link></li>
                        <li><Link to="/classes" className="text-gray-300 hover:text-white">Classes</Link></li>
                        <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                        <li><Link to="/profile" className="text-gray-300 hover:text-white">My Profile</Link></li>
                        <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a 
                            href={FBLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href={TwitterLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaTwitter />
                        </a>
                        <a 
                            href={LinkedInLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href={InstagramLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Shosan Code Hub Online Academy. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer



