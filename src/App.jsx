import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ServiceGuide from './pages/ServiceGuide';
import PriceList from './pages/PriceList';
import Manual from './pages/Manual';
import GenericPage from './pages/GenericPage';

// Placeholder for Contact page
const Contact = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>問い合わせ</h2>
      <p>社内システムに関するお問い合わせはこちら。</p>
      {/* Implementation omitted as per current scope focus */}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<Dashboard />} />
        <Route path="/service" element={<ServiceGuide />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/contact" element={<Contact />} />

        {/* Virtual Pages */}
        <Route path="/company" element={<GenericPage />} />
        <Route path="/community" element={<GenericPage />} />
        <Route path="/crosby" element={<GenericPage />} />
        <Route path="/nohako" element={<GenericPage />} />
        <Route path="/koshu" element={<GenericPage />} />
        <Route path="/baymax" element={<GenericPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
