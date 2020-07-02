import React, { useState, useEffect } from 'react'
import Project from './Project'
import { Route } from 'react-router-dom'
import routes from '../../routes/myRouter'




export default function Portfolio() {
    const [item, SetItem] = useState('all')

    const filterItems = (type) => {
        SetItem(type)


    }


    const items = [{
        titlePart: 'لیست وظایف',
        explan: 'به صورت داینامیک',
        address: '/dashboard/List',
        imageAddress:'/photo/todolist.png'

    }, {
        titlePart: 'جدول',
        explan: 'به صورت داینامیک',
        address: '/dashboard/table',
        imageAddress:'/photo/table-main.jpg'
    }, {
        titlePart: 'پنل کابری',
        explan: 'به صورت داینامیک',
        address: '/dashboard/add',
        imageAddress:'/photo/panel.jpg'
    }]

    let primitive = items.map(item => <Project {...item} />)
    let list = <Project titlePart={'لیست وظایف'} explan={'به صورت داینامیک'} address={'/dashboard/List'} imageAddress={'/photo/todolist.png'}/>
    let table = <Project titlePart={'جدول'} explan={'به صورت داینامیک'} address={'/dashboard/table'} imageAddress={'/photo/table-main.jpg'}/>
    let panel = <Project titlePart={'محصولات'} explan={'به صورت داینامیک'} address={'/dashboard/add'} imageAddress={'/photo/panel.jpg'}/>

    const [currentComponent, setCurrentComponent] = useState(primitive)

    useEffect(() => {

        switch (item) {
            case 'all':
                setCurrentComponent(primitive)
                break;
            case 'list':
                setCurrentComponent(list)
                break;
            case 'table':
                setCurrentComponent(table)
                break;
            case 'panel':
                setCurrentComponent(panel)
                break
        }
    }, [item]);









    return (
        <section id="portfolio">
            <div className="container">
                <header className="section-header">
                    <h3 >نمونه کارهای ما</h3>
                    <h5 className='samples'> فلیتر نمونه کار ها براساس :</h5>
                    {/* <div>
                        <span>  فلیتر نمونه کار ها براساس :</span>
                    </div> */}
                </header>
                <ul id="portfolio-filter">
                    <li ><button type="button" className="filter-active" onClick={(e) => filterItems('all')}>همه</button></li>
                    <li ><button type="button" onClick={(e) => filterItems('list')}>لیست</button></li>
                    <li ><button type="button" onClick={(e) => filterItems('table')}>جدول</button></li>
                    <li><button type="button" onClick={(e) => filterItems('panel')}>محصولات</button></li>
                </ul>
                <div className="row text-center" id="portfolio-container">



                    {currentComponent}

                    <div className="row text-center">

                        {routes.map(route => <Route {...route} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}














