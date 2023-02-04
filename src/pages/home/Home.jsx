import React from 'react';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import RiplesBanner from '../../components/riplesBanner/RiplesBanner';
import Services from '../../components/services/Services';
import Works from '../../components/works/Works';

function Home() {
    return (
        <div className="home_container">
            <a name='home'></a>
            <RiplesBanner />
            <Navbar />

            {/* about  */}
            <About />

            {/* services */}
            <Services />

            {/* works */}
            <Works />

            {/* contact */}
            <Contact />

            {/* footer */}
            <Footer />
        </div>
    )
}

export default React.memo(Home);