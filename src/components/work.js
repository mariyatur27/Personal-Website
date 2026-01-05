import React , {useState} from 'react'
import { work_data } from './data/work_data'

export default function Work() {
  const [experience, setExperience] = useState(null)

  return (
    <section id='work' className='center-sec-seciton'>
        <h2 className='section-title'>Work Experience...</h2>

        {experience && (
          <div className='target-experience experience-box'>
            <ExperienceBlock data={experience} target={true} setExperience={setExperience}/>
            <div className='right-side'>
              <ul>
                {experience.description.map(ele => (
                  <li>
                    <p className='description-item'>{ele.trim()}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

         <div className="experience-container">
          {work_data.map((data) => {
            if(!experience ||
              data.companyName !== experience.companyName ||
              data.dates[0] !== experience.dates[0] ||
              data.dates[1] !== experience.dates[1]){
              return(
                <div className="experience-box">
                  <ExperienceBlock data={data} setExperience={setExperience}/>
                </div>
              )
            }
          })}
        </div>
    </section>
  )
}

function ExperienceBlock({data, target, setExperience}) {
  return(
    <div className="left-side">
      <img src={data.companyLogo} alt={data.companyName} className='company-logo' />
      <div className='details-box'>
          <h3>{data.position}</h3>
          <p>{data.dates[0]} - {data.dates[1]}</p>
          <div className='actions-container'>
              <p className='work-type'>{data.type}</p>
              {!target && (
                <p className='action-btn' onClick={() => setExperience(data)}>
                    learn more ->
                </p>
              )}
          </div>
          <div className='skills-container'>
              {data.skills.map((skill, index) => (
                  <div key={index} className='skill-pill'>{skill}</div>
              ))}
          </div>
          {target && (
            <div className='details-box-footer'>
              <p onClick={() => setExperience(null)}>(X) Close</p>
            </div>
          )}
      </div>
    </div>
  )
}