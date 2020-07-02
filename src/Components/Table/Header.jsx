import React from 'react'

export default function Footer({ columns }) {
    const headerColumns = Object.keys(columns).map((value , key) => {
        return ('clickable' in columns[value]) && columns[value].clickable ? <th key={key} onClick={(e) => { }}>{columns[value].title}</th> : <th>{columns[value].title}</th>
    })

    return (
        <thead>
            <tr>
                {headerColumns}
            </tr>
        </thead>
    )
}