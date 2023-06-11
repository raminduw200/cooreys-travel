import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/Home/HomePage';
import PackageDetailPage from './Components/Pages/PackageDetail/PackageDetailPage';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="package_detail" element={<PackageDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
