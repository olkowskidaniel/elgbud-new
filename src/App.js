import './App.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import {Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/home-page.component.jsx';

const App = () => {
  return (
    <div className='app-container'>
      <Header />  
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
