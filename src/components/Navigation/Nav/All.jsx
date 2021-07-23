import React from 'react';
import clas from './All.module.css';
import Options from './Options/Options';






const All = (props) => {
  console.log(props);
  return (<div className={clas.nav}>
    <Options message='One' like="123" />
    <Options message='Open' like="234" />
    <Options message='Close' like="877" />
    <Options message='Go' like="111" />
     </div>
    )
}






export default All;