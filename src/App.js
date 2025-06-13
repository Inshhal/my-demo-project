import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './mybindle-bootstrap/src/components/Hero';
import Features from './mybindle-bootstrap/src/components/Features';
import Connections from './mybindle-bootstrap/src/components/Connections';
import InstallApp from './mybindle-bootstrap/src/components/InstallApp';
import Donation from './mybindle-bootstrap/src/components/Donation';
import Testimonials from './mybindle-bootstrap/src/components/Testimonials';
import DownloadCTA from './mybindle-bootstrap/src/components/DownloadCTA';
import Header from './mybindle-bootstrap/src/components/Header';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Connections />
      <InstallApp />
      <Donation />
      <Testimonials />
      <DownloadCTA />
    </div>
  );
}

export default App;
