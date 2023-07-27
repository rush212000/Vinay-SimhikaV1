import React from 'react';
import FAQsP from '../img/FAQs/V&SFAQs.jpg';

const FAQs = () => {
  return (
    <>
      <style>
        {`
        @import url('https://use.typekit.net/upl4fxr.css');
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
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'shelby, sans-serif',
            fontStyle: 'normal',
            fontSize: '100px',
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
          background: '#E0E0E0',
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
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              fontSize: '20px'
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
          Kindly RSVP through our wedding website or by contacting either of us directly. We kindly request your response by XXXX
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>I’m travelling from abroad, where is the best place to fly in to?</span></p>
          <br/>
          We suggest landing in either Ahmedabad (Sardar Vallabhbhai Patel International Airport) or Rajkot Airport and hiring a car to travel to Bhuj. Alternatively, you may be able to find limited flights to Bhuj or Kandla Airports. 
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontSize: '30px'}}><span style={{fontWeight: 'bold'}}>How do I reserve a room at Time Square Club?</span></p>
          <br/>
          For our international guests, we have blocked out rooms at the resort. Please contact Vinay or Simhika directly for more information. Rooms will be allocated on a first come first served basis. 
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
          <br/>

          <br/>
    
        </div>

        <br/>
        <br/>
        <br/>

      </div>
    </>
  );
};

export default FAQs;
