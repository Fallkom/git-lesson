import React from 'react';
import clas from './Navigation.module.css';
import { NavLink } from 'react-router-dom';





const Navigation = () => {
  return (<div className={clas.navigation}>
    <NavLink to='/options' className={clas.o}>Options</NavLink><br></br>
    <NavLink to='/music' className={clas.m}>Music</NavLink><br></br>
    <NavLink to='/photo' className={clas.p}>Photo</NavLink><br></br>
    <NavLink to='/video' className={clas.v}>Video</NavLink>
     </div>
    )
}






export default Navigation;