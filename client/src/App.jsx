import React, { Fragment, useState, useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/demo1">Demo1</Link>
          <Link to="/demo2">Demo2</Link>
          <Link to="/demo3">Demo3</Link>
          <Link to="/demo4">Demo4</Link>
        </div>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/demo1'>
          <Demo1 />
        </Route>
        <Route path='/demo2'>
          <Demo2 />
        </Route>
        <Route path='/demo3'>
          <Demo3 />
        </Route>
        <Route path='/demo4'>
          <Demo4 />
        </Route>
      </BrowserRouter>
    </div>
  );
};

const Landing = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#1454b5' },
      { opacity: 0.9, color: '#1454b5' },
      { opacity: 0.8, color: '#3470c9' },
      { opacity: 0.7, color: '#3470c9' },
      { opacity: 0.6, color: '#558de0' },
      { opacity: 0.5, color: '#558de0' },
      { opacity: 0.4, color: '#6f99d9' },
      { opacity: 0.3, color: '#6f99d9' },
      { opacity: 0.2, color: '#99bcf0' },
      { opacity: 0.1, color: '#99bcf0' },
      { opacity: 0, color: '#b1caf0' },
    ],
    from: { opacity: 0, color: '#021838' },
  })
  return (
    <div>
      <div style={{ fontSize: '5rem', height: '100%', textAlign: 'center', padding: '4rem 0'}}>
        <animated.div style={styles}>React Spring Demos</animated.div>
      </div>
      <div>
        <h1>react-spring:</h1>
        <p style={{ fontSize: '1.5rem', padding: '1rem'}}>- is a spring-physics based animation library that can power UI related animation in React</p>
        <a style={{ fontSize: '1.5rem'}} href='https://react-spring.io/'>https://react-spring.io/</a>
        <p style={{ fontSize: '1.5rem', paddingLeft: '1rem'}}>- has five major hooks at the moment:</p>
        <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem'}}>
          1. useSpring – a single animation that changes the animation state a -> b
        </p>
        <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem'}}>
          2. useSprings – multiple animations that also change the animation state a -> b
        </p>
        <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem'}}>
          3. useTrail – multiple animations with a single data set where each subequent animation trails behind the previous one
        </p>
        <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem'}}>
          4. useTransition – for mount/unmount transitions
        </p>
        <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem'}}>
          5. useChain – to chain multiple animations together
        </p>
        <p style={{ fontSize: '1.5rem', paddingLeft: '1rem'}}>- has Parallax and ParallaxLayer components to create parallax effect</p>
      </div>
    </div>
  )
};

export default App;