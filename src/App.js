import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import Coding from './components/coding';
import Projects from './components/projects';
import Blog from './components/blog';
import Other from './components/other';
import React from 'react';
import BlogPage from './components/blogPage';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { blog_data } from './components/data/blog_data';
import ArticlePage from './components/articlePage';

function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2 ? "same" : "different");
  return (
    <>
      <Navbar />
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/'
              element={
                <div>
                  <Hero />
                  <About />
                  <Coding />
                  <Projects />
                  <Blog />
                  <Other />
                </div>
              }
            />
            <Route path='/blog'
              element={
                <div>
                  <BlogPage />
                </div>
              }
            />
            {blog_data.map((data, key) => {
              return(
                <Route path={`/blog/${data.page_name}`}
                  element={
                    <div>
                      <ArticlePage 
                        articleName={data.name}
                        articleDate={data.date}
                        articleLength={data.length}
                        articleContent={data.sections}
                      />
                      <Other />
                    </div>
                  }
                />
              )
            })}
          </Routes>
        </Router>
      <Footer />
    </>
  );
}

export default App;
