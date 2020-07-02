import React, { useState } from 'react'
import AddProduct from './AddProduct';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function ShowProduct() {
    const [add, setAdd] = useState(false)
    const [list, setList] = useState([])

    const insert = item => {

        setList([...list, item])
    }

    const insertData = list.map(data =>

        <div class="text-center ">
            <div className=" borderProduct mt-2">
                <img src={data.item.image} class="card-img-top productPicture " alt={data.item.name} />
                <div class="card-body mt-5">

                    <h5 className="card-title ">{data.item.name}</h5>
                    <p className="card-text ">{data.item.description}</p>
                    <p className="card-text">{data.item.price}</p>
                </div>
            </div>
        </div>

    )
    return (
        <div className='mx-auto' style={{width:'500px'}}>
            <div className='btn-group mt-2 col ' >
                <button className=' btn-danger ' onClick={e => setAdd(false)}><i><FontAwesomeIcon icon={faTimes} /></i></button>
                <button className='btn btn-primary btn-block ' onClick={e => {
                    setAdd(true)
                }}>اضافه کردن محصول</button>

            </div>
            {add && <AddProduct  sendItem={insert} closeItem={e => setAdd(false)} />}

            <div className='container'>
                <div className='row'>
                    <div className="col-8 mx-auto ">
                        {insertData}
                    </div>
                </div>
            </div>
        </div>
    )
}











