import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './home.module.css';

function Home() {
    return (
        <div className="home_container">
            <Navbar />
        </div>
    )
}

export default React.memo(Home);