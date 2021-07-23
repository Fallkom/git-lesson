import React from 'react';
import clas from './Options.module.css';






const Options = (props) => {
  console.log(props);
  return (<div className={clas.nav}>
    {props.message} {props.like}
     </div>
    )
}






export default Options;