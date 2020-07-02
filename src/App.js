import React from 'react';

import Slider from './Components/slider/Slider'
import Container from './Components/aboutMe/Container'
import Blog from './Components/Blog/BlogContainer'
import Conter from './Components/conterUp/Conter'
import Skill from './Components/skills/Skill'
import Portfolio from './Components/Samples/Portfolio'
import Footer from './Components/Footer'
function App() {

  window.onscroll = function () {
    let scr = this.document.querySelector('html').scrollTop
    if (Math.floor(scr) > 120) {
      document.querySelector('#navbar').style.backgroundColor = '#86D0F0'
      document.querySelector('#navbar').style.padding = '13px 40px'
      document.querySelector('#navbar').style.opacity = '0.9'
    } else {
      document.querySelector('#navbar').style.backgroundColor = ''
      document.querySelector('#navbar').style.padding = '20px 40px'
    }
  }

  return (
    <div className="App" >

      <Slider />
      <Container />
      <Portfolio />
      <Blog />
      <Conter />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
