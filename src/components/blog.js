import React from 'react'

export default function Blog() {
  return (
    <section id='blog' className='center-sec-seciton'>
        <h2 className='section-title'>Blog...</h2>
        <div className='blog-container-2'>
            <img src={`${process.env.PUBLIC_URL}/assets/light-icon.png`} className='blog-img'/>
            <h2>Sometimes I write.</h2>
            <p>I am not a writer, but I like to find ways to share my opinions, ideas and experiences with others. So, this "blog" is a way for me to do so. In this blog, I will be talking about my high school and university experiences, student life and personal topics. If you have a few minutes to spare, you should definetly try reading some of it, I am sure you will find something that you like :)</p>
            <a href={`${process.env.PUBLIC_URL}/blog`}><button className='secondary-btn'>Read Something</button></a>
        </div>
    </section>
  )
}
