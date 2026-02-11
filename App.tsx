import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';


function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Programs />
        <Gallery />
        <Team />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
      
      {/* Gemini Powered Chat Bot */}
      {/* <ChatWidget /> */}
    </div>
  );
}

export default App;
