import React from 'react';

const Home = () => {
  return (
    <div className='home-container'>
<header className='header'>
    <div className='logo'>
    </div>
    <h1>ONETOUCHMORE</h1> {/*Replace with actual name*/}
        <nav>
            <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>FAQs</a></li>
            <li><a href='#'> Accessories</a></li>
            <li><button className='book-button'>Book an item</button></li>
            </ul>
        </nav>
        </header>
    </div>
  );
};

export default Home;
