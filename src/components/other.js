import React from 'react'

export default function Other() {
  return (
    <section id='other' className='center-sec-seciton'>
        {/* <h2 className='section-title'>Other Stuff...</h2> */}
        <div className='other-container'>
            <div className='box'>
                {/* <img src={`${process.env.PUBLIC_URL}/assets/instagram-icon.png`} /> */}
                <a href='https://www.instagram.com/mariyaaa_turetska_/' target='_blank'><h4> --> Follow me on Instagram.</h4></a>
            </div>
            <div className='box'>
                {/* <img src={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`} /> */}
                <a href='https://www.linkedin.com/in/mariya-turetska-36901a1b0/' target='_blank'><h4> --> Connect with me on LinkedIn.</h4></a>
            </div>
            <div className='box'>
                {/* <img src={`${process.env.PUBLIC_URL}/assets/gmail-icon.png`} /> */}
                <a href='mailto:mariyatur27@gmail.com' target='_blank'><h4> --> Send me an email.</h4></a>
            </div>
            <div className='box'>
                {/* <img src={`${process.env.PUBLIC_URL}/assets/github-icon.png`} /> */}
                <a href='https://github.com/mariyatur27' target='_blank'><h4> --> See my code on GitHub.</h4></a>
            </div>
        </div>
    </section>
  )
}
