import React from 'react';
import Zoom from 'react-reveal/Zoom';
import style from './about.module.css';

function About() {
    return (
        <>
            <a name="about"></a>
            <div className={style.about}>
                <div className={style.about_relative}>
                    <Zoom left>
                        <h1 >ABOUT ME</h1>
                    </Zoom>
                    <Zoom bottom>
                        <div className={style.about_more} >
                            <h2>Know Me More</h2>
                            <span className={style.underline}></span>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <Zoom bottom cascade>
                        <div className="col-lg-8">
                            <div className={style.about_left} >
                                <h2>I'm <strong>Hikmat To'rayev,</strong> a Frontend Web Developer</h2>
                                <p>
                                    <span className='d-block mb-4'>
                                        I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </span>
                                    <span>
                                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={style.about_right} >
                                <table className='table table-hover table-striped table-bordered' >
                                    <tr>
                                        <td><strong>Name: </strong> Hikmat To'rayev</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email: </strong> <a href="thravshanovich@gmail.com">thravshanovich@gmail.com</a></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Age: </strong> 28</td>
                                    </tr>
                                    <tr>
                                        <td><strong>From: </strong> Uzbekistan, Bukhara</td>
                                    </tr>
                                </table>
                                <button type='button' className='btn btn-danger'>Download CV</button>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    )
}

export default React.memo(About);