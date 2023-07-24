import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import components
import Header from './components/Header';
import Home from './pages/Home';
import OurEvent from './pages/OurEvent';
import OurStory from './pages/OurStory';
import FAQs from './pages/FAQs';
import RSVP from './pages/RSVP';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pages/OurEvent" element={<OurEvent />} />
          <Route path="/pages/OurStory" element={<OurStory />} />
          <Route path="/pages/FAQs" element={<FAQs />} /> 
          <Route path="/pages/RSVP" element={<RSVP />} /> {/* Corrected the path and used "element" prop */}
        </Routes>
      </>
    </Router>
  );
};

export default App;
