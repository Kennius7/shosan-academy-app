


const WhatWeOffer = () => {
    return (
        <section className="w-full h-[350px] flexColCenter my-8 bg-slate-200">
            <div className="w-full flexCenter mb-4">
                <h2 className="text-secondaryBlue font-semibold text-[25px] text-center">
                    What We Offer
                </h2>
            </div>
            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                At Online Academy, we strive to provide an unparalleled learning experience:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li><strong>Comprehensive Course Library:</strong> Choose from a wide range of subjects, from technology to arts.</li>
                <li><strong>Interactive Learning Tools:</strong> Engage with quizzes, live projects, and hands-on exercises.</li>
                <li><strong>Personalized Learning Paths:</strong> Get tailored recommendations to achieve your goals faster.</li>
                <li><strong>Certification Programs:</strong> Earn credentials that enhance your resume and professional profile.</li>
                <li><strong>Ongoing Updates:</strong> Stay ahead with courses updated to reflect the latest industry trends.</li>
            </ul>
        </section>
    )
}

export default WhatWeOffer



