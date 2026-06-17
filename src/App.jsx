import { useState } from "react";
import WhyChooseUs from "./components/WhyChooseUs";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <WhyChooseUs />

            <Testimonials />
            <FinalCTA />
        </>
    );
}

export default App;
