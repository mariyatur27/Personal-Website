import React from 'react'
import { blog_data } from './data/blog_data'

export default function BlogPage() {
  return (
    <section id='blogPage' className='center-sec-seciton'>
        <h2 className='section-title'>Welcome to the Realm of My "Writing:</h2>
        <h5>* My first article is coming up soon! Please combe back a little later. *</h5>
            {/* {blog_data.map((data, key) => {
              return(
                <a href={`/blog/${data.page_name}`}>
                  <div className='blog-container' key={key} id={'blog-' + key}>
                    <div className='general-info'>
                      <h5>{data.date}</h5>
                      <h5>Length: {data.length}</h5>
                    </div>
                    <h1>{data.name}</h1>
                    <div className='author-info'>
                      <h5>Mariya Turetska</h5>
                    </div>
                  </div>
                </a>
              )
            })} */}
    </section>
  )
}
