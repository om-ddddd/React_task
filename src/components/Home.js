import React from 'react';
import Schedule from './Schedule';

const Home = () => {
  return (
    
    <div className="home">
      {/* <img src="spats_react_task/src/image/Black and White Minimal Modern Illustrated Wormhole Logo.png" className='logo-fest'></img> */}
      <h1 className='fest'>SPACEX<br></br><span class="more">Lets dive deep into space</span></h1>
      
      <div className='main'>
      <button className='space-button' onClick={() => window.location.href = '/schedule'}>
        Explore Events
      </button>
      <button className='space-button' onClick={() => window.location.href = '/login'}>
        Register Now
      </button>

      </div>
      

    </div>
  );
};

export default Home;
