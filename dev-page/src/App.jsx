import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

// Lazy load components
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const FAQ = lazy(() => import('./components/FAQ')); // New FAQ component
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Links = lazy(() => import('./components/Links'));
const Formulario = lazy(() => import('./components/Formulario'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <About />
                <Services />
                <FAQ /> {/* Added FAQ section */}
                <Contact />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/links" 
            element={<Links />} 
          />
          <Route 
            path="/formulario" 
            element={
              <>
                <Formulario />
                <Footer />
              </>
            } 
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;