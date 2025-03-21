import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Links from './components/Links'; 

function App() {
  return (
    <Router basename="/oficial-page-dev">  
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/links" element={<Links />} /> 
      </Routes>
    </Router>
  );
}

export default App;
