import './App.css';
import AboutUs from './about/AboutUs';
import HeroSection from './hero/hero.component';
import MeetOurFounder from './our-founder/MeetOurFounder';
import OurMinistryEvents from './our-ministry/OurMinistryEvents';
import OurMission from './our-mission/OurMission';
import OurServices from './our-services/OurServices';
import AfterSchoolPrograms from './school-programs/AfterSchoolPrograms';

function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurMission />
      <OurMinistryEvents />
      <MeetOurFounder />
      <AfterSchoolPrograms />
    </>
  );
}

export default App;
