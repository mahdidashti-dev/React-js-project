import React from 'react'

export default function TopMenu() {
    const titles = [
        {
            href: '#home',
            name: 'صفحه اصلی'
        },
        {
            href: '#about',
            name: 'درباره من'
        },
        {
            href: '#portfolio',
            name: 'نمونه کارها'
        },
        {
            href: '#contact-us',
            name: 'راه های ارتباطی با من'
        },
    ]

    const showMenu = titles.map(title => <li><a href={title.href}>{title.name}</a></li>)


    
 

    return (

        <nav id="nav">
            <ul  class="list-unstyled">
                {showMenu}
            </ul>

        </nav>

    )
}
