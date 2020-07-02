import React, { useEffect } from 'react'
import TopMenu from './TopMenu'
import SideMenu from './SideMenu'


export default function Slider() {

    const divStyle = {
        color: 'blue',

        backgroundImage: "url(" + "/photo/890.jpg" + ")",

    };



    let chagneMenu = ({ showClose }) => {
        let nav = document.querySelector('#nav')


        if (showClose === true) {
            document.querySelector('.material-icons').innerHTML = 'close'
            nav.style.right = '0px';

        }
        if (showClose === false && document.querySelector('.material-icons')) {

            document.querySelector('.material-icons').innerHTML = 'list'
            nav.style.right = '-240px';
        }


    }






    return (
        <div>

            <header id="navbar">
                <div id="logo">
                    <h4>React Js</h4>
                </div>

                <TopMenu />
                <SideMenu onSubmit={e => chagneMenu(e)} />

            </header>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <section id="slider">
                <div id="top-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={divStyle} >
                            <div className="carousel-overlay">
                                <div className="carousel-content text-center">
                                    <h2 className="carousel-title">ما بهترین تیم را در اختیار داریم</h2>
                                    <p className="carousel-text">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                                    <a href="#" className="btn btn-success btn-lg carousel-btn">شروع کنید</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

