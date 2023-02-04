import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Title from '../about/Title';
import { allData } from './options';
import './works.css';

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
        let a = document.createElement('a');
        a.href = data.url;
        a.target = "_blank";
        a.click();
        a.remove();
    }

    return (
        <>
            <a name="works"></a>
            <Title
                back="PORTFOLIO"
                front="My Work"
            />
            <div className={"works mb-5"}>
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
                            <Zoom bottom key={item.id}>
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