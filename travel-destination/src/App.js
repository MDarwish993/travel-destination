import Home from './components/home/Home'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TourDetails from './components/tourDetails/TourDetails';
import data from './data/db.json'
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/city/:id" element={<TourDetails data={data}   />}/>
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
