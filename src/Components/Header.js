import React from 'react';
import Button from './Button';
import '../Styles/Header.css';


const Header = ({ title, onAdd, showAdd }) => {

    const onClick = (e) =>{
        console.log(e);
      }


  return (
    <header className='header'>
    {/* <h1 style={{color:'skyblue', backgroundColor: 'steelblue'}}>{title}</h1>
    <h3 style={HeaderStyle}>Component Styled</h3>     */}

    <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'black'} text= {showAdd ? 'x' : '+'} onClick={onAdd}/>

    </header> 


  );
};

const HeaderStyle = {
    color:'Grey',
    backgroundColor: 'black'
}
Header.defaultProps = {
    title : 'Some text',
}
export default Header;
