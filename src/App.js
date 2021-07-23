import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import All from './components/Navigation/Nav/All';

const App = () => {
  return (
    <BrowserRouter>
    <div className='all'>
        <div className='Header'><Header /></div>
        <div className='Navigation'><Navigation /></div>
        <Route path='/options' component={All} />
      </div>
      
   </BrowserRouter>
  );
}



export default App;
