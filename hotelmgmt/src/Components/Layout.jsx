import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      
      {/* Curved section between Header and Footer */}
      <div className="orange-header">
        <div className="curve"></div>
      </div>
      
      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
