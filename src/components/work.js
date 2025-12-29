import React , {useState} from 'react'
import { work_data } from './data/work_data'

export default function Work() {

  return (
    <section id='work' className='center-sec-seciton'>
        <h2 className='section-title'>Work Experience...</h2>
        <Grid items={work_data}/>
    </section>
  )
}


function GridItem({ companyLogo, companyName, position, dates, type, skills, description, expanded, onToggle }) {
  return (
    <div className={`experience-box ${expanded ? "expanded" : ""}`}>
      <div className="left-side">
        <img src={companyLogo} alt={companyName} className='company-logo' />
        <div className='details-box'>
            <h3>{position}</h3>
            <p>{dates[0]} - {dates[1]}</p>
            <div className='actions-container'>
                <p className='work-type'>{type}</p>
                <p className='action-btn' onClick={onToggle}>
                    {expanded ? "hide" : "learn more ->"}
                </p>
            </div>
            <div className='skills-container'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-pill'>{skill}</div>
                ))}
            </div>
        </div>
      </div>

      {expanded && (
        <div className="right-side">
            <ul>
               {description.map(ele => (
                <li>
                    <p className='description-item'>{ele}</p>
                </li>
               ))} 
            </ul>
        </div>
      )}
    </div>
  );
}


function Grid({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="experience-container">
      {items.map((item, index) => (
        <GridItem
          key={index}
          {...item}
          expanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}