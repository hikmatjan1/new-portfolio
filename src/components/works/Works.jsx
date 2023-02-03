import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import styleAbout from '../about/about.module.css';
import './works.css';

let allData = [
    {
        id: Math.random().toString(),
        img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        category: "Game",
        projectName: "Puzzle",
        url: "project url",
    },
    {
        id: Math.random().toString(),
        img: "https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=",
        category: "Web App",
        projectName: "Pizza",
        url: "project url",
    },
];

function Works() {
    const [data, setData] = useState(allData);
    const ul_ref = useRef();

    // put active item al tag
    useEffect(() => {
        let li = ul_ref.current.querySelectorAll('li');

        const handlerFunction = (item) => {
            let categoryName = item.querySelector('.category_name').textContent;
            ul_ref.current.querySelector('.activeItem').classList.remove("activeItem");
            item.classList.add("activeItem");
            if (categoryName === "All") {
                setData(allData);
                return;
            }
            setData(allData.filter(element => element.category === categoryName));
        }

        li.forEach(item => {
            item.addEventListener("click", () => handlerFunction(item))
        })


        return () => {
            li.forEach(item => {
                item.removeEventListener("click", () => handlerFunction(item))
            })
        }
    }, []);

    // redirect page
    const passToSideFunction = (data) => {
        console.log(data);
        let a = document.createElement('a');
        a.href = "https://www.google.com";
        a.target = "_blank";
        a.click();
        a.remove();
    }

    return (
        <>
            <a name="works"></a>
            <div className={styleAbout.about}>
                <div className={styleAbout.about_relative}>
                    <Zoom left>
                        <h1 data-aos="fade-left">PORTFOLIO</h1>
                    </Zoom>
                    <Zoom bottom>
                        <div className={styleAbout.about_more} data-aos="fade-right">
                            <h2>My Work</h2>
                            <span className={styleAbout.underline}></span>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className={"works"}>
                <div className="container">
                    <div className={`mb-5 category`}>
                        <ul ref={ul_ref}>
                            <Zoom left cascade>
                                <li className='activeItem'>
                                    <span className='category_name'>All</span>
                                    <span className={`underline_item`}></span>
                                </li>
                                <li>
                                    <span className='category_name'>Web App</span>
                                    <span className={`underline_item`}></span>
                                </li>
                                <li>
                                    <span className='category_name'>Template</span>
                                    <span className={`underline_item`}></span>
                                </li>
                                <li>
                                    <span className='category_name'>Game</span>
                                    <span className={`underline_item`}></span>
                                </li>
                            </Zoom>
                        </ul>
                    </div>
                    <div className="row mb-5">
                        {data.map(item => (
                            <Zoom bottom>
                                <div className="col-lg-4 mb-3" onClick={() => passToSideFunction(item)}>
                                    <div className={"projects"}>
                                        <img src={item.img} alt="" />
                                        <div className={"bg_color"}>
                                            <h4>{item.projectName}</h4>
                                            <span>{item.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default React.memo(Works);