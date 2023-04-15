import './App.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import {Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/home-page.component.jsx';
import AboutPage from './routes/about/about-page.component.jsx';
import OfferPage from './routes/offer/offer-page.component.jsx';
import RealizationsPage from './routes/realizations/realizations-page.component.jsx';
import ContactPage from './routes/contact/contact-page.component.jsx';

const App = () => {
  return (
    <div className='app-container'>
      <Header />  
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/offer" element={<OfferPage/>}/>
        <Route path="/realizations" element={<RealizationsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
