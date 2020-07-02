import React from 'react'

export default function Tbody({ items, columns }) {

    const rows = items.map(item => {
        const row = Object.keys(item).map(key => {
            return (key in columns && columns[key].clickable) ? <td onClick={(e) => {

                columns[key].clickable(item[key]);

            }} >{item[key]}</td> : <td  >{item[key]}</td>;
        });

        return <tr id={`highlight`}> {row}</tr >




    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}
