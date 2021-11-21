import React,{useContext,useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {Main,Header,Content,Footer,ContainerLogoPharse,ContainerSignIn} from './styles'

function Login(){

  const {signIn,signUp} = useContext(UsuarioContext);

  const [email,setEmail] = useState('antonio@antonio.com');
  const [password,setPassword] = useState('123123');

  const handleLogin = async () =>{
    try {
      await signIn(email, password)
    }catch(err){
      console.log(err)
    }
  }

  const handleCadastrar = async () =>{
    try {
      await signUp(email, password)
    }catch(err){
      console.log(err)
    }
  }

return(
  <Main>
    <Header>
     
    </Header>

    <Content>
    
      <ContainerLogoPharse>
      <div id="logo">
       <img src="/images/logo-pb.png" width="300px"/>
     </div>
     <div id="pharse">
       <p>Problemas para formar</p>
       <p>Um grupo de trabalho?</p>
       <p>O Grupou! resolve!</p>
     </div>
      </ContainerLogoPharse>
      
      <ContainerSignIn>
        <div id="containerLogin">
          <div id="containerButtons">
            <div class="button">
              Membro
            </div>
            <div class="button inativo">
              Convidado
            </div>
          </div>

          <div class="box">
              <div class="title">Email</div>
            <input placeholder="Digite seu Email"/>
          </div>

          <div class="box">
              <div class="title">Senha</div>
            <input placeholder="Digite sua Senha"/>
          </div>
          <div class="forgotCredentials">Esqueci minha senha</div>
          <div id="containerLoginOrJoin">
              <div class="button invert" onClick={handleCadastrar}>Cadastre-se</div>
              <div class="button" onClick={handleLogin}>Entrar</div>
          </div>

        </div>
        
      </ContainerSignIn>

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

export default Login