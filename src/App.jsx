import './App.css';
import Navbar from './componenets/Navbar';
import Into from './componenets/Into';
import Footer from './componenets/footer';
import Portfolio from './componenets/Portfolio';
import Services from './componenets/Services';
import Aboutme from './componenets/Aboutme';
import ContactForm from './componenets/ContactForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import Prc from './componenets/prc';
// import Matter from './componenets/Matter';
function App() {
  const contactFormRef = useRef(null);
  return (
    <>
    <div className='bg-black'>
      <Router basename={import.meta.env.BASE_URL}>
        <Navbar contactFormRef={contactFormRef} />
        <Into />
        <Aboutme />
        <Services />
        <Portfolio />
        
        <div ref={contactFormRef}>
          <Routes>
            <Route path="/" element={<ContactForm />} />
          </Routes>
        </div>
        
        <Footer />
      <Prc/>
      </Router>
      </div>
    </>
  );
}

export default App;
