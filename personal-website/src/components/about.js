import React from 'react'

export default function About() {
  return (
    <section id='about' className='center-sec-seciton'>
        <h2 className='section-title'>About me...</h2>
        <div className='glued'>
            <div className='container'>
                <img src='https://homeworkhubtutoring.org/assets/img/team/me.jpg' className='about-img'/><br></br>
                <a href= 'data/assets/resume.pdf' className='resume-btn '><button id='primary-btn'>Resume</button></a>
            </div>
            <div className='container'>
                <p>Hey, nice to meet you! My name is Mariya and I am an incoming software engineering students at the University of Waterloo. I like everything related to tech: AI, machine learning, alogrithms, software development, you name it! One of my biggest hobbies is web development, as you can probably tell by looking at this website. Even though I am just starting university, I have already managed to get 1-2 years of work experience in the tech industry, and I am always open to new work and project opportunities that will help me further perfect my skills, gain more experience, venture into the unknown and meet cool people.</p>
            </div>
        </div>
    </section>
  )
}
