import React from 'react'
// import navbar from '../../public/assets/menu-icon.png'

export default function Navbar() {

  const showMenu = () => {
    document.getElementById('slide-menu').style.display = 'block';
  }

  const hideMenu = () => {
    document.getElementById('slide-menu').style.display = 'none';
  }

  window.onload = function(){
    var links = document.getElementsByClassName('mobile-menu-text');
    for (var i = 0; i < links.length; i++){
      links[i].id = "ele-".concat(i);
      document.getElementById(links[i].id).addEventListener('click', function(){
        hideMenu();
      })
    }
  }

  return (
    <section id='navabar'>
        <div className='container-1'>
            <a href={`${process.env.PUBLIC_URL}/`}><p className='primary-comp'>Mariya Turetska.</p></a>
        </div>
        <div className='container-2'>
            <a href={`${process.env.PUBLIC_URL}/#about`}><p className='navbar-comp'>About</p></a>
            <a href={`${process.env.PUBLIC_URL}/#coding`}><p className='navbar-comp'>Coding</p></a>
            <a href={`${process.env.PUBLIC_URL}/#projects`}><p className='navbar-comp'>Projects</p></a>
            <a href={`${process.env.PUBLIC_URL}/blog`}><p className='navbar-comp'>Blog</p></a>
            <a href={`${process.env.PUBLIC_URL}/#other`}><p className='navbar-comp'>Other</p></a>
            <img src={`${process.env.PUBLIC_URL}/assets/menu-icon.png`} className='menu-icon' onClick={showMenu}/>
        </div>
        <div id='slide-menu'>
          <a href={`${process.env.PUBLIC_URL}/#about`} className='mobile-menu-link'><p className='mobile-menu-text'>About</p></a>
          <a href={`${process.env.PUBLIC_URL}/#coding`} className='mobile-menu-link'><p className='mobile-menu-text'>Coding</p></a>
          <a href={`${process.env.PUBLIC_URL}/#projects`} className='mobile-menu-link'><p className='mobile-menu-text'>Projects</p></a>
          <a href={`${process.env.PUBLIC_URL}/blog`} className='mobile-menu-link'><p className='mobile-menu-text'>Blog</p></a>
          <a href={`${process.env.PUBLIC_URL}/#other`} className='mobile-menu-link'><p className='mobile-menu-text'>Other</p></a>
          <p id='close-btn' onClick={hideMenu}>x</p>
        </div>
    </section>
  )
}
