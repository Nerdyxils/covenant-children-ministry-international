import './App.css';
import AboutUs from './about/AboutUs';
import ContactUs from './contact-us/ContactUs';
import Footer from './footer/Footer';
import HeroSection from './hero/hero.component';
import MeetOurFounder from './our-founder/MeetOurFounder';
import OurMinistryEvents from './our-ministry/OurMinistryEvents';
import OurMission from './our-mission/OurMission';
import OurServices from './our-services/OurServices';
import EventCarousel from './our-events/OurEvents.jsx'
import AfterSchoolPrograms from './school-programs/AfterSchoolPrograms';
import ScrollToTop from './scroll/ScrollToTop';

function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <EventCarousel/>
      <OurMission />
      <OurMinistryEvents />
      <MeetOurFounder />
      <AfterSchoolPrograms />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
