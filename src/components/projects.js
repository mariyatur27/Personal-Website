import React from 'react'
import { projects_info_2 } from './data/projects_info'

export default function Projects() {
  return (
    <section id='projects' className='center-sec-seciton'>
        <h2 className='section-title'>Projects...</h2>
        <div className='projects-container'>
            {projects_info_2.map((data, key) => {
                return (
                    <div className='project-box' key={key} id={key + "-project"}>
                        <div className='project-cont-1'>
                            <img src={data.image} className='project-img' />
                        </div>
                        <div className='project-cont-2'>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                            <a href={data.link} target='_blank'><button className='secondary-btn'>Learn More</button></a>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
