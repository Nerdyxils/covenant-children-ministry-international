import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MissionPage from './pages/MissionPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import suppressResizeObserverErrors from './utils/errorHandling';

function App() {
  useEffect(() => {
    // Suppress ResizeObserver errors globally
    suppressResizeObserverErrors();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
