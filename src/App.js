import React from 'react';
import './App.scss';
//import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './Components/header/Header';
//import Routes from './config/Routes';
import Footer from './Components/footer/Footer';
//import Routess from './config/Routes';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';


function App() {
    return (
    <Router>
        
            <Header />
                <Routes>
                <Route  path='/:category/search/:keyword'   element={<Catalog />} />
                <Route  path='/:category/:id'      element={<Detail />}  />
                <Route  path='/:category'   element={<Catalog />} />
                <Route   path='/'exact element={<Home />}/>
                <Route  path='/:category/:id' element={<Detail />} />
            </Routes>
            <Footer />
            
    </Router>  );
}

export default App;
