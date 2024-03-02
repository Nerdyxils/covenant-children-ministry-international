import './App.css';
import AboutUs from './about/AboutUs';
import HeroSection from './hero/hero.component';
import OurMission from './our-mission/OurMission';
import OurServices from './our-services/OurServices';

function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurMission />
    </>
  );
}

export default App;
