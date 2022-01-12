import './App.css';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import background from "./img/greenglobe.jpeg";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { 
//   BrowseRouter as Router, 
//   Routes, 
//   Route, 
//   Link } from 'react-router-dom';

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

//     function App() {
//       return (
//         <Routes>
//         <Route exact path='/' element={< aboutMe />}></Route>
//         <Route exact path='/about' element={< Portfolio />}></Route>
//         <Route exact path='/contact' element={< Contact />}></Route>
//       </Routes>
      
//       )
//     }
    
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
