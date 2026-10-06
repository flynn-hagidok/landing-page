import About from "../sections/About";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";
import Hero from "../sections/Hero";
import Process from "../sections/Process";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Process></Process>
            <CTA></CTA>
            <Contact></Contact>
        </>
    )
};

export default Home;