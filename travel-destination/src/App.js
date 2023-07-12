import Home from './components/home/Home'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TourDetails from './components/tourDetails/TourDetails';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />}/>
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
