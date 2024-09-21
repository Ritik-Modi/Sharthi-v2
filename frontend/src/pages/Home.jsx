import React from 'react';
import logo from '../logo/logo.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handlePageClick = () => {
        navigate('/login'); // Redirects to the login page on click
    };

    return (
        <div
            className='flex items-center justify-center min-h-screen bg-pink-200'
            onClick={handlePageClick} // Redirects when user clicks anywhere on the page
        >
            <img src={logo} alt="Logo" className='w-32 h-32' />
        </div>
    );
}

export default Home;
