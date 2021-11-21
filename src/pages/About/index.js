

import React from 'react';
import {useLocation,useHistory} from 'react-router-dom'
import {Main,Header,Content,Footer} from './styles'

function About(){
  

  let location = useLocation();
  let {nome} = location.state || '';
  let history = useHistory();
  
  const handleClickHome = () => {
    history.push('/')
  }
  const handleClickChat = () => {
    history.push('/chat')
  }
  const handleClickAbout = () => {
    history.push('/about')
  }

return(
  
  <Main>

  <Header>
  <div id="logo">
  <img src="/images/logo-pink.png" width="120px"/>
  </div>

  <div id="barr">
    
  <div class="button" onClick={handleClickHome}>Inicio</div>
  <div class="button" onClick={handleClickAbout}>Sobre</div>
  <div class="button" onClick={handleClickChat}>Chat</div>
  
  
  </div>

  </Header>

  <Content>

  

  <div class="about" id="about">
              <div class="about-content">
                <h1>Bem vindos ao <span>Grupou!</span></h1>
                <div class="about-text">
                  <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse enim ad, error aut, veritatis nemo natus maiores eligendi et hic molestias, nobis mollitia molestiae. Voluptate labore sed error harum.</a>
                </div>
                <a class="about-btn">explore</a>
              </div>

              <div class="about-content-img">             
              <img src="/images/grupo-estudo.jpg" width="120px"/>
              </div>
          </div>

  </Content>

  <Footer>
  <div id="logo">
  <img src="/images/logo-pink.png" width="150px"/>
  </div>

  <div id="about">
      <p>Contato</p>
      <p>Contato@grupou.com.br</p>
  </div>

  <div id="social">
  <img src="/images/logo-linkedi.png" width="50px"/>
  <img src="/images/logo-inst.png" width="50px"/>
  <img src="/images/logo-face.png" width="50px"/>
  </div>
  </Footer>

</Main>
  
)
}

export default About
