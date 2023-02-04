import React from 'react';
import Zoom from 'react-reveal/Zoom';
import styleAbout from './about.module.css';

function Title({ back, front }) {
    return (
        <div className={styleAbout.about}>
            <div className={styleAbout.about_relative}>
                <Zoom left>
                    <h1 >{back}</h1>
                </Zoom>
                <Zoom bottom>
                    <div className={styleAbout.about_more} >
                        <h2>{front}</h2>
                        <span className={styleAbout.underline}></span>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default React.memo(Title);