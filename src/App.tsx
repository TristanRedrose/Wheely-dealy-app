import React from 'react';
import './App.css';
import NavbarComponent from './Components/Common/Navbar/Navbar';
import Footer from './Components/Common/Footer/Footer';
import Homepage from './Components/Homepage/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/404Page/PageNotFound';
import Listings from './Components/Listings/Listings';
import { ListingStore } from './Stores/ListingStore';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="listings" element={<Listings listingStore={ListingStore}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App;
