import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Links from './components/Links';
import Formulario from './components/Formulario';

function App() {
  return (
    <Router> 
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
        <Route path="/links" element={
          <>
            
            <Links />
          </>
        } />
        <Route path="/formulario" element={
          <>
            <Formulario />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
