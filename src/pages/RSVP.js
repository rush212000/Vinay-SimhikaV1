import React from 'react';
import VSfoot from '../img/RSVP/V&SFOOT.png';

const RSVP = () => {

  const Footer = () => {
    return (
      <footer className="footer mt-auto">
        <div className="container mx-auto py-4">
          {/* Add your footer content here */}
          <div className="flex justify-center items-center">
            <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
            <p className="text-center text-gray-600">
              <span>© {new Date().getFullYear()}</span> <span className="ml-auto"></span>
            </p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div style={{ backgroundColor: '#F6F6F6' }}>
      <nav className="navbar" style={{ backgroundColor: 'black', color: 'white' }}>
        {/* Add your navbar content here */}
        <h1>Navbar Content</h1>
      </nav>
      <div>
        <h1></h1>
        <iframe
          src="https://withjoy.com/vinayandsimhika/rsvp"
          title="Zola RSVP"
          width="100%"
          height="900"
          top="-25vh"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default RSVP;
