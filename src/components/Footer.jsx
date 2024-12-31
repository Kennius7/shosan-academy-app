


const Footer = () => {
    return (
        <footer className="w-full h-[130px] flexColCenter border-t-[1px] 
            border-dimWhite bg-secondaryBlue py-4">
            <p className="text-center text-[15px] italic text-white">
                &copy; {new Date().getFullYear()} Shosan Code Hub Online Academy. All rights reserved.
            </p>
            <p>Follow us on:</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF' }}>Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF' }}>Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF' }}>Instagram</a>
            </div>
            <div>
                <p>Contact us: <a href="mailto:support@onlineacademy.com" style={{ textDecoration: 'none', color: '#007BFF' }}>support@onlineacademy.com</a></p>
                <p>Phone: +123-456-7890</p>
            </div>
        </footer>
    )
}

export default Footer



