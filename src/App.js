import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import TabContent from "./components/TabContent/TabContent";
import Rooms from "./components/Rooms/Rooms";
import Location from "./components/Location/Location";
import Gallery from "./components/Gallery/Gallery";
// import AboutRetreat from "./components/AboutRetreat/AboutRetreat";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <TabContent/>
      <Rooms/>
      <Location/>
      <Gallery/>
      {/* <AboutRetreat/> */}
      <ContactForm/>
      <Footer/>
    </>
    
  );
}

export default App;
