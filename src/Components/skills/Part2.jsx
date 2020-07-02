import React from 'react'
import Progress from './Progress'
export default function Part2() {
    return (

        <div>
            <div id="skills-content">
                <Progress value={'w-100'} name={'HTML'} valueName={'100%'} />
                <Progress value={'w-75'} name={'CSS'} valueName={'75%'} />
                <Progress value={'w-100'} name={'SEO'} valueName={'100%'} />
                <Progress value={'w-75'} name={'React js'} valueName={'75%'} />
                <Progress value={'w-75'} name={'Express js'} valueName={'75%'} />
                
            </div>
        </div>

    )
}
