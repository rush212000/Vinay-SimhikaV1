import React from 'react';
import FAQsP from '../img/FAQs/V&SFAQs.jpg';
import VSfoot from '../img/FAQs/vsFoot.png'
const FAQs = () => {
  return (
    <>
      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');
      `}
      </style>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
        `}
      </style>

      <div
        style={{
          background: `url(${FAQsP})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflowY: 'scroll', // Enable vertical scrolling for the entire container
        }}
      >
        <h1
        className='min-[0px]:text-[55px] md:text-[100px]'
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            //fontSize: '100px',
            position: 'relative',
            bottom: 10
          }}
        >
          Frequently Asked Questions
        </h1>
      </div>

      <div
      className='container mx-auto h-full flex flex-col'
        style={{
          background: '',
          display: 'flex',
          flexDirection: 'column', // Change flexDirection to column
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: 120,
          padding: "0% 5%",
        }}
      >
        <div 
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              //fontSize: '20px'
    }}>

          {/* Add more img elements here as needed */}
          {/* Content */}
          
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>What are the dates for the wedding events?</span></p>
          <br/>
          The wedding events will be held from Tuesday 2nd April to Thursday 4th April 2024. Please refer to the ‘our events’ page for further details. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>How can I RSVP and when is the deadline?</span></p>
          <br/>
          Kindly RSVP through our wedding website or by contacting either of us directly. We kindly request your response by 1st November 2023.
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>I’ve missed the RSVP deadline; can I still attend?</span></p>
          <br/>
          Not to worry, you can still attend. RSVP through the website and pop Vinay or Simhika a message letting them know you’ve done so.
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>I’m travelling from abroad, where is the best place to fly in to?</span></p>
          <br/>
          We suggest landing in either Ahmedabad (Sardar Vallabhbhai Patel International Airport) or Rajkot Airport and hiring a car to travel to Bhuj. 
          Alternatively, you may be able to find limited flights to Bhuj or Kandla Airports. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>How do I reserve a room at Time Square Club?</span></p>
          <br/>
          For our international guests, we have blocked out rooms at the resort. Please contact Vinay or Simhika directly for more information. 
          Rooms will be allocated on a first come first served basis. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>What should I wear for the wedding events?</span></p>
          <br/>
          Get your lehengas, sarees and kurta out! We’re going all out traditional. For the haldi ceremony, we recommend wearing something casual that you don’t mind getting wet or stained with haldi. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>What will the weather be like this time of year?</span></p>
          <br/>
          Be prepared for heat! We recommend packing plenty of sun protection as temperatures can surpass 40&#176;C. We aim to keep you as cool and comfortable as possible and have measures in place for this. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>What sights and activities can I enjoy during my stay in Bhuj, Kutch?</span></p>
          <br/>
          As the saying goes, ‘Kutch nahi dekha to kuch nahi dekha’ translating to ‘if you haven’t seen Kutch, you haven’t seen anything.’
          <br/>
          <br/>
          <span style={{fontWeight: 'bold'}}>Here are some places you may like to visit:</span>
          <br/>
          <br/>
          Shree Swaminarayan Mandir Bhuj
          <br/>
          Vande Mataram Memorial
          <br/>
          Smritivan Earthquake Memorial and Museum
          <br/>
          Aaina Mahal Palace
          <br/>
          Great Rann of Kutch
          <br/>
          Kadiya Dhro
          <br/>
          Vijay Villas Palace
          <br/>
          Bhujia Hill 
          <br/>
          Mandvi Beach
          <br/>
          <br/>

          <br/>
    
        </div>

        <br/>
        <br/>
        <br/>
  {/* Footer */}
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
      </div>
    </>
  );
};

export default FAQs;
