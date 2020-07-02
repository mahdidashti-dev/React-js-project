import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
export default function Skill() {
    return (
        <section id="skills">
            <div class="container">
                


                <div className="container">

                    <div className="row">



                        <div className="left  col-md-6 ">
                            <Part1 />
                        </div>


                        <div className="right  col-md-6 ">
                            <Part2 />
                        </div>


                    </div>
                </div>



            </div>
        </section>
    )
}
