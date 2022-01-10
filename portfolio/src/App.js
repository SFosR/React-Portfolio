import logo from './logo.svg';
import './App.css';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import background from "./img/greenglobe.jpeg";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})` }} >
      <Header />
      <AboutMe />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
