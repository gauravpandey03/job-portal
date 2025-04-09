import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/components_lite/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
