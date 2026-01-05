import React from 'react'

export default function Footer() {
  return (
    <section id='footer' className='center-sec-seciton'>
        <h5>© Mariya Turetska - {new Date().getFullYear()}. Check out how this website was built <a href='https://github.com/mariyatur27/Personal-Website' style={{textDecoration: 'underline', color: '#f16b82'}} target='_blank'>here</a> :)</h5>
    </section>
  )
}
