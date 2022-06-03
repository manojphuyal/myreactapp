import React from 'react'
import '../../ui/header.css';
const MainHeader = () => {
    return (
        <div>
            <header>
                <nav className='navbar'>
                    <ul className='header-items'>
                        <li className='header-item'>Home</li>
                        <li className='header-item'>Services</li>
                        <li className='header-item'>About</li>
                        <li className='header-item'>Team</li>
                        <li className='header-item'>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainHeader