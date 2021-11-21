


import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import {Main,Header,Content,Footer} from './styles'


function Home(){
 
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
    
      <div class="faixa">
         <div class="projeit-titulo">Salas abertas</div>                          
      </div>

      <div class="container">

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">8 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">2 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text"><span>0 pessoas na Sala</span></div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>
       
        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">3 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>
        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">4 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text"><span>0 pessoas na Sala</span></div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">6 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
       </div>

        <div class="post">
            <div class="post-titulo">Sala de ...</div>
            
            <div class="post-imagem"><img src="/images/grupo-estudo.jpg"/></div>
            <div class="post-descricao">
            <div class="descricao-text">12 pessoas na Sala</div>
            </div>
            
            <div class="post-bnt"><a href="/" target="_blank">Entrar</a></div>
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

export default Home