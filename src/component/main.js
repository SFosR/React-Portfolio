import React, {useState} from 'react';
import Header from './Header';
import About from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './Footer';

const Main = () => {

    const [currentPage, setPage] = useState('About');
    const pageChangeHandler = (page) => setPage(page);

    const renderPage = () => {
        if(currentPage === 'About'){
            return <About />;
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio />;        
    }
            return <Contact />;
};

return(
    <div>
        <Header currentPage={currentPage} pageChangeHandler={pageChangeHandler}/>
        {renderPage()}
        <Footer/>
    </div>
)
}

export default Main;