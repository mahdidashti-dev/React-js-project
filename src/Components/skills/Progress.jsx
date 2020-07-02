import React from 'react'

export default function Progress({ name, valueName, value }) {
    return (
        <div>
            <span className="mr-4 title">{name}</span>
            <div className="progress">

                <div className={`progress-bar back  flex-row justify-content-between ${value}`} >

                    <span className="ml-4">{valueName}</span>
                </div>
            </div>
          
        </div >
    )
}
