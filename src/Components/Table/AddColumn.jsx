import React from 'react'

export default function AddColumn() {
    return (
        <div>
            <button className='btn btn-warning' onClick={() => {
                let x = document.getElementById('highlight');
                console.log(x)
                // x.innerHTML = "ستون جدید";
            }}>اضافه کردن ستون</button>
        </div>
    )
}
