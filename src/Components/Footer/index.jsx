import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faFacebook,faLinkedin,faGit } from '@fortawesome/free-brands-svg-icons'
export default function index() {
    return (
        <div>
            <footer id="footer" className="text-light text-justify">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h5>درباره شرکت</h5>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.
                    </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>پیوندهای مفید</h5>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-left"></i><a href="#">خانه</a></li>
                                <li><i className="fa fa-angle-left"></i><a href="#">درباره ما</a></li>
                                <li><i className="fa fa-angle-left"></i><a href="#">خدمات</a></li>
                                <li><i className="fa fa-angle-left"></i><a href="#">قوانین و مقررات</a></li>
                                <li><i className="fa fa-angle-left"></i><a href="#">حریم خصوصی</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>تماس با ما</h5>
                            <p>
                                تهران - صادقیه
                    </p>
                            <p>
                                <strong>تلفن : </strong><span style={{ direction: 'ltr', display: 'inline-block' }}>۰۲۱ - ۱۲۳۴۵۶۷۸۹</span><br />
                                <strong>ایمیل : </strong>mahdidashtinet11@gmail.com
<br />
                            </p>
                            <div className="links">
                                <a href="#"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faFacebook }/></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faLinkedin}/></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faGit}/></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>خبرنامه</h5>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                            <form>
                                <input type="email" name="email" placeholder="ایمیل خود را وارد کنید" />
                                <button type="submit">عضویت</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black' }}>
                    <p className="text-center p-3 mb-0">کلیه حقوق برای این مهدی دشتی محفوظ است.</p>
                </div>
            </footer>
        </div>
    )
}
