import React from 'react'
import CountUp from 'react-countup';

export default function Conter() {
    return (
        <section id="stats">


            <div className="container ">

                <div className="row">

                    <div className="col">

                        <div className='topPart'>


                            <header className="section-header">
                                <h3 className='pad'>آمار و ارقام</h3>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                            </header>

                            <div className="row  zoomIn" >
                                <div className="col-md-6 col-lg-4  text-center">
                                    <span className="counter">
                                        <CountUp start={0} end={1605} duration={2.75} />
                                    </span>
                                    <h5>تعداد مشتریان</h5>
                                </div>
                                <div className="col-sm-6 col-lg-4  text-center">
                                    <span className="counter">
                                        <CountUp start={0} end={1605} duration={2.75} />
                                    </span>
                                    <h5>تعداد پروژه ها</h5>
                                </div>
                                <div className="col-sm-6 col-lg-4 text-center">
                                    <span className="counter">
                                        <CountUp start={0} end={1605} duration={2.75} />
                                    </span>
                                    <h5>درصد رضایتمندی</h5>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </section>




        // <div>
        //      <CountUp start={0} end={160526} />,
        // </div>
    )
}


