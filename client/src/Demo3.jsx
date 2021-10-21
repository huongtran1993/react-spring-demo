import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxDemo = (props) => {
  return (
    <Parallax pages={2} style={{ backgroundImage: 'url(./bg.jpg)' }}>
      <ParallaxLayer offset={0} speed={-1} style={{ opacity: 1 }}>
        <img
          src="./moon.png"
          style={{ display: "block", marginTop: '100px', width: "40%", marginLeft: '-20%'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4} style={{ opacity: 1 }}>
        <img
          src="./mountain.png"
          style={{ display: "block", width: "100%", marginTop: '100px'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} style={{ opacity: 1 }}>
        <img
          src="./road.png"
          style={{ display: "block", width: "100%", marginTop: '100px'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.3 }}>
        <img
          src="./bg.jpg"
          style={{ display: "block", width: "100%", height: '150%'}}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} style={{ position: 'absolute', backgroundImage: 'linear-gradient(to top, transparent, #0a2a43 40%, #0a2a43 90%, transparent' }}>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '100px',
          fontFamily: 'Palatino, URW Palladio L, serif',
          fontWeight: 'bold'
        }}>
        <p>Hello World</p>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxDemo;