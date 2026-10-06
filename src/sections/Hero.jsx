

const Hero = () => {
    return (
        <section id="home" className="h-screen flex py-50 scroll-mt-24 px-4">
            <div className="max-w-7xl mx-auto space-y-6 flex flex-col items-center">
                <p className="bg-blue-100 px-2 py-2 text-sm lg:text-md font-bold text-blue-600 text-center rounded-md uppercase">Digital Solutions For Your Business</p>

                <h2 className="text-4xl font-bold max-w-xl mx-auto text-center">We Build Digital Solutions That Grow Your Business</h2>

                <p className="opacity-80 max-w-2xl">Biswas IT Firm provides reliable and modern digital solutions to help businesses build a strong online presence, improve efficiency, and grow with confidence.</p>

                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">Get Started</button>
                    <button className="px-4 py-2 border rounded-md font-semibold">Explore Services</button>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
};

export default Hero;