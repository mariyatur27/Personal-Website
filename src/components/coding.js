import React from 'react'
import { projects_info } from './data/projects_info'
import { tools } from './data/tools_icons'

export default function Coding() {

  return (
    <section id='coding' className='center-sec-seciton'>
        <h2 className='section-title'>Coding...</h2>
        <div className='projects-container'>
            {projects_info.map((data, key) => {
                return (
                    <div className='project-box' key={key} id={key + "-project"}>
                        <div className='project-cont-1'>
                            <img src={`${process.env.PUBLIC_URL + data.image}`} className='project-img' />
                        </div>
                        <div className='project-cont-2'>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>

                            {data.tools && (
                                <div id='tools-container'>
                                    {data.tools.map(tool => {
                                        if(tool in tools){
                                            console.log(tools[tool])
                                            return (   
                                                <a href={tools[tool].docURL} target="_blank">
                                                    <img src={tools[tool].path} alt={tools[tool].altText} className='tools-icon'/>
                                                </a>
                                            )
                                        }
                                    })}
                                </div>
                            )}

                            <div className='glued-2'>
                                <a href={data.github} target='_blank' className='project-btn-link'><button className='tertiary-btn'>Open Github Repository</button></a>

                                {data.website && (
                                    <a href={data.website} target='_blank' className='project-btn-link'><button className='tertiary-btn'>See It Live</button></a>
                                )}

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <a className='resume-btn' href='https://github.com/mariyatur27' target='_blank'><button id='secondary-btn'>View More Projects</button></a>
    </section>
  )
}
