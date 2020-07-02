import React from 'react'
import { Link } from 'react-router-dom'

export default function Form({ titlePart, explan, address, imageAddress }) {
    console.log(address)
    return (
        <div className="col-lg-4 col-md-6 fadeInUp web" >
            <div className="card shadow-sm mb-4 ">
                <div className="position-relative">
                    <img src={imageAddress} className="card-img-top" width={'100px'} height={'200px'} />
                    <div className="card-img-overlay">
                        <a href="#">
                            <i className="fa fa-external-link"></i>
                        </a>
                        <a href="images/portfolio/web2.jpg" >
                            <i className="fa fa-eye"></i>
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <Link to={address}><h4 className="card-title mb-4 text-dark">{titlePart}</h4></Link>
                    <h6 className="card-subtitle text-muted">{explan}</h6>

                </div>
            </div>
        </div>
    )
}
