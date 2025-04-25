import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      
      <div className="content-wrapper">
        {/* Curved Section Inside Content Wrapper */}
        <div className="curved-body">
          <Outlet />  {/* This will render the pages based on route */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
