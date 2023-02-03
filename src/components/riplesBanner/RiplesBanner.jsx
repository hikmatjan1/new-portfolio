import React from 'react';
import { images } from './options';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './style.css';
import './riplesBanner.css';

function RiplesBanner() {

    return (
        // {/* <!-- water animation --> */ }
        <div id="home" className="ripples-wrapper">
            <div className="ripples-img"
                style={{ backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})` }}>
                <div className="container headlineText" style={{ position: 'absolute', top: '0', left: '0', width: '100%' }}>


                    <section className="cd-intro">
                        <h1 style={{ color: '#fff' }} >Hi! I'm Hikmat To'rayev</h1>
                        <span>Creative Developer located in Uzbekistan.</span>
                        <h1 className="cd-headline clip is-full-width">
                            <span>Specialized in </span>&nbsp;
                            <span className="cd-words-wrapper">
                                <b className="is-visible">Frontend Developer</b>
                                {/* <b>Backend Developer</b> */}
                            </span>
                        </h1>
                    </section>
                    <a href="#about">
                        <AiOutlineArrowDown className="AiOutlineArrowDown" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(RiplesBanner);