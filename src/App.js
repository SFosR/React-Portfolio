import React from 'react';
import './App.css';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import resume from './component/resume.js';
import background from "./img/greenglobe.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  BrowseRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';

//   class App extends Component {
//     render() {
//       return (
//       <Router>
//         <div className="App">
//         </div>
//       </Router>
//     );
//     }
//     }

//     <div className="App">
//       <ul>
//         <li>
//           <Link to="/pages/aboutMe.js">About Me</Link>
//         </li>
//         <li>
//           <Link to="/pages/portfolio.js">Portfolio</Link>
//         </li>
//         <li>
//           <Link to="/pages/contact.js">Contact</Link>
//         </li>
//       </ul>
//     </div>

    function App() {
      return (
        <Router>
          <Route component={aboutMe} path='/React-Portfolio' exact />
          <Route component={aboutMe} path='/' exact />
          <Route component={portfolio} path='/portfolio' />
          <Route component={contact} path='/contact' />
      <Footer />    
      </Router>
      
//       )
//     }
    
  // function App() {
  //   return (
  //   <div className="App" style={{ backgroundImage:`url(${background})` }} >
  //     <Header />
  //     <AboutMe />
  //     <Contact />
  //     <Portfolio />
  //     <Footer />
  //   </div>
  );
}

export default App;
