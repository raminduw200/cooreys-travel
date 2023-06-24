import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Pages/Home/HomePage';
import PackageDetailPage from './Components/Pages/PackageDetail/PackageDetailPage';
import BookNowPage from './Components/Pages/BookNow/BookNowPage';

// import PlacesListPage from './Components/Pages/Places/PlacesList';
import AboutPage from './Components/Pages/About/AboutPage';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/package_detail" element={<PackageDetailPage />} />
        <Route path="/book_now" element={<BookNowPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="/places" element={<PlacesListPage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
