import React from 'react'

export default function TopPart() {
    return (
        <section id="about">
            <div className="container">
                <header className="section-header ">
                    <h3>درباره ما</h3>
                    <p className='bord'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                </header>
                <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-4 fadeInUp" >
                        <div className="card shadow-sm mb-5">
                            <img src={'/photo/photo1.jpg'} className="card-img-top" />
                            <div className="card-body text-center p-4 ">
                                <h3 className="card-title mb-3">SEO</h3>
                                <p className="card-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4  fadeInUp" >
                        <div className="card shadow-sm mb-5">
                            <img src={'/photo/photo2.jpg'} className="card-img-top" />
                            <div className="card-body text-center p-4">
                                <h3 className="card-title mb-3">Front-End</h3>
                                <p className="card-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4  fadeInUp" >
                        <div className="card shadow-sm mb-5">
                            <img src={'/photo/photo3.jpg'} className="card-img-top" height='182' />
                            <div className="card-body text-center p-4">
                                <h3 className="card-title mb-3">Back-End</h3>
                                <p className="card-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
