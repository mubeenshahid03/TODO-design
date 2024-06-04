import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Company from './Components/Company/Company';
import StayOrganized from './Components/StayOrganized/StayOrganized';
import Benefits from './Components/Benefits/Benefits';
import Features from './Components/Features/Features';
import Plan from './Components/Plan/Plan';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <StayOrganized />
      <Benefits />
      <Features />
      <Plan />
      <Footer />
    </div>
  );
}

export default App;
