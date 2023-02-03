import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { MdOutlineDeveloperMode, MdOutlineDesignServices, MdDesignServices, MdDevices } from 'react-icons/md';
import styleAbout from '../about/about.module.css';
import style from './services.module.css';

function Services() {
    return (
        <>
            <a name="services"></a>
            <div className={styleAbout.about}>
                <div className={styleAbout.about_relative}>
                    <Zoom left>
                        <h1 >SERVICES</h1>
                    </Zoom>
                    <Zoom bottom>
                        <div className={styleAbout.about_more} >
                            <h2>What I Do</h2>
                            <span className={styleAbout.underline}></span>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className={style.services}>
                <div className="container">
                    <div className="row">
                        <Zoom bottom cascade>
                            <div className="col-lg-6 mb-5">
                                <div className={style.services_row}>
                                    <div className={style.MdOutlineDeveloperMode}>
                                        <MdOutlineDeveloperMode />
                                    </div>
                                    <div>
                                        <h3>WEB DEVELOPMENT</h3>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestias praesentium laudantium rerum quos veritatis distinctio ea porro doloremque!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className={style.services_row} >
                                    <div className={style.MdOutlineDeveloperMode}>
                                        <MdDesignServices />
                                    </div>
                                    <div>
                                        <h3>WEB DESIGN</h3>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestias praesentium laudantium rerum quos veritatis distinctio ea porro doloremque!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className={style.services_row} >
                                    <div className={style.MdOutlineDeveloperMode}>
                                        <MdDevices />
                                    </div>
                                    <div>
                                        <h3>RESPONSIVE DESIGN</h3>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestias praesentium laudantium rerum quos veritatis distinctio ea porro doloremque!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className={style.services_row} >
                                    <div className={style.MdOutlineDeveloperMode}>
                                        <MdOutlineDesignServices />
                                    </div>
                                    <div>
                                        <h3>CREATIVE DESIGN</h3>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestias praesentium laudantium rerum quos veritatis distinctio ea porro doloremque!</span>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Services);