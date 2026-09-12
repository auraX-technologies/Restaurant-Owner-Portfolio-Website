
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import MenuSection from '../sections/MenuSection';
import FullMenu from '../components/FullMenu';
import Story from '../sections/Story';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import ReservationCTA from '../sections/ReservationCTA';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <MenuSection />
      <FullMenu />
      <Story />
      <Gallery />
      <Testimonials />
      <ReservationCTA />
      <Contact />
    </>
  );
};

export default Home;
