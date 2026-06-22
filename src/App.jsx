import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-body">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default App;
