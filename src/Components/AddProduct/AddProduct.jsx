import React, { useState } from 'react'
import uuid from 'uuid'
export default function AddProduct({ closeItem, sendItem }) {
    const [productName, setproductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const createItem = (e) => {
        e.preventDefault();

        const item = {
            name: productName,
            description: description,
            image: image,
            price: price,
            id: uuid()
        }

        sendItem({
            item
        })
    }



    const isImgReady = image;
    let imagePreview;

    if (isImgReady) {
        imagePreview = <img src={image} alt="product " className='rounded' style={{ width: '200px' }} />
    }



    return (
        <>
            <section className='addProduct mt-2 mr-3 py-2'>


                <div className="preview">




                    <p>نام : </p><strong className='text-black-50'> {productName}</strong>
                    <p>توضیحات :</p><strong className='text-black-50'> {description}</strong>
                    <p>قیمت :</p><strong className='text-black-50'> {price} </strong>
                    <div>
                        {imagePreview}
                    </div>
                </div>
                <div className="itemCreation">



                    <form className='mr-5'>
                        <div className='form-group'>
                            <div className="control">
                                <label htmlFor="name">نام محصول </label>
                                <input id='#name1' className='form-control' type="text" name="name" onChange={e => setproductName(e.target.value)} />
                            </div>

                            <div className="control">
                                <label htmlFor="description" >توضیحات </label>
                                <textarea id='description1' className='form-control' name="description" onChange={e => setDescription(e.target.value)}></textarea>
                            </div>

                            <div className="control">
                                <label htmlFor="price">قیمت محصول </label>
                                <input id='#price1' className='form-control' type="number" name="price" onChange={e => setPrice(e.target.value)} />
                            </div>

                            <div className="control">
                                <label htmlFor="image">عکس محصول </label>
                                <input id='image1' className='form-control' type="text" name="image" onChange={e => setImage(e.target.value)} />
                            </div>


                            <button type='submit' className='btn btn-outline-primary btn-lg btn-block mt-2' onClick={closeItem, createItem}>اضافه کن</button>
                        </div>
                    </form>






                </div>

            </section>


        </>
    )
}
