import React from 'react';
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from './pages/Skills/skills.component.jsx'

import './assets/img/background/background.webp'


//components
import MyNavbar from './components/navbar/navbar.component.jsx'
import MyCarousel from './components/my-carousel/my-carousel.component.jsx'
import TitleMessage from './components/title-message/title-massage.componet.jsx'
import About from './pages/about/about.component.jsx'
import Education from './pages/education/education.component.jsx'
import ContactForm from './pages/contact-form/contact-form.component.jsx'
import FooterPanel from './pages/footer/footer.component.jsx'
import Particles from 'react-particles-js'
import { particlesOptions } from "./particlesOptions";
const  App = () =>{
  return (
  <div className="App" style={{ position: "relative" }}>
      
     <MyNavbar/>
     <MyCarousel/>
    <TitleMessage/>
     <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 

    {/*about section */}
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
          

          <div>
            <Container className="container-box rounded">
              <Slide  bottom duration={500}>
                <hr/>
              <Skills/>
              </Slide>
            </Container>
            
          </div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr/>
              <Education/>
              </Fade>
            </Container>
            
          </div>

          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
              <ContactForm/>
              </Fade>
            </Container>
            
          </div>

         <hr/>
              <FooterPanel/>
          
          
      </div>
    </div>
    
    
  );
}

export default App;
