import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/main-page/MainPage';
import Footer from './components/footer/Footer';
import AboutPage from './pages/about-page/AboutPage';
import PortfolioPage from './pages/portfolio-page/PortfolioPage';
import ContactPage from './pages/contact-page/ContactPage';

function App() {
  return (
    <div className="app container-fluid">
      <Router>
        <Navbar/>
        <div className="big-wrapper">
          <Route path='/' exact component={ MainPage } />
          <Route path='/about' exact component={ AboutPage } />
          <Route path='/portfolio' exact component={ PortfolioPage } />
          <Route path='/contact' exact component={ ContactPage } />
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
