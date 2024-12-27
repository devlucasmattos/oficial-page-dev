import Header from './components/Header';
import Services from './components/Services';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <About/>
      <Services />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
