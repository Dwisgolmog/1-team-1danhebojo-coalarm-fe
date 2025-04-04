import logo from "../assets/images/header/logo.png";
import React from "react";

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    const handleLogoClick = () => {
        navigate('/dashboard');
    };
    
    return (
        <header className="flex justify-between items-center p-6 h-[80px] bg-[#0d1846] text-white">
            <div className="flex items-center">
                <button className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                <img 
                    src={logo} 
                    alt="Bitcoin" 
                    className="w-full h-full object-contain cursor-pointer" 
                    onClick={handleLogoClick}
                />
            </div>
        </header>
    );
}

export default Header;