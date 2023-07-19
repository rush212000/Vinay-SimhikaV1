import React from 'react';

// import components
import Header from './components/Header';
import Home from './pages/Home'; // Updated import statement for Home component
// import router
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  
  return (
    <>
      <Router>
        <Header />
        <Home/>
      </Router>
    </>
  );
};

export default App;
