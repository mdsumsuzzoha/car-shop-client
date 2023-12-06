
const About = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom left, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className='md:space-y-6 py-6'>
            <div className="grid md:grid-cols-2 md:gap-10 md:mx-20 " >
                <div
                    data-aos="zoom-in-right"
                    className=' grid content-center space-y-6 mt-6 mx-6 md:pr-6 '>
                    <h2 className='text-xl font-bold text-slate-200'>ABOUT CAR SHOP</h2>
                    <h2 className='text-5xl font-bold '>Welcome to CAR SHOP</h2>
                    <p>The bustling business seminar gathered industry leaders, fostering innovation and collaboration. Expert panels unveiled trends, strategies, and insights, igniting dialogue among participants. Networking thrived as minds converged, exchanging ideas that sparked newfound opportunities. It was a melting pot of visionaries, shaping the future of commerce in a dynamic, electrifying atmosphere.</p>
                    <button className='btn btn-primary w-max'>Read More</button>
                </div>
                <img
                    data-aos="zoom-in-left"
                    className='w-11/12 mx-auto my-6 rounded-xl' src={"https://i.ibb.co/FwJnwV9/Toyota-GR-Supra.jpg"} alt="" />

            </div>
            <div className="grid md:grid-cols-2 md:gap-10 mx-6 md:mx-20 md:pt-10">
                <div className='md:max-w-md space-y-3'>
                    <div>
                        <h4 className='text-2xl font-bold'>Easy Booking</h4>
                        <p>Effortlessly secure your spot with seamless, user-friendly online booking systems.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Complete Facilities</h4>
                        <p>All-inclusive amenities for seamless convenience and optimal functionality.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Professional Speakers</h4>
                        <p>Professional speakers are adept communicators who captivate audiences with expertise and charisma.</p>
                    </div>
                </div>
                <div className='md:max-w-md pt-10 md:pt-0 md:ms-10 space-y-6'>

                </div>

            </div>




        </div>
    );
};

export default About;