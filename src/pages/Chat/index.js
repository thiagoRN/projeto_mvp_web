import React,{useContext,useState,useEffect} from 'react';

import {UsuarioContext} from '../../contexts/user';

import {useHistory} from 'react-router-dom'

import firebaseApp from '../../services/firebase';

import {getFirestore,addDoc,collection,onSnapshot,query,where} from "firebase/firestore";

import {Main,Header,Content,Footer} from './styles'

function Chat(){

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

  const db = getFirestore(firebaseApp)
  const [messages,setMessages] = useState([])

  const {user,signOut} = useContext(UsuarioContext)

  useEffect(()=>{
    const unsub = onSnapshot(query(collection(db,"mensagens"),where("lido", "!=",true)),
    (querySnapshot)=>{
      const tmp = [];

      querySnapshot.forEach(async (document)=>{
        tmp.push({
          id: document.id,
          ...document.data()
        })
        
      })

      setMessages(tmp)
    });

    return () => {
      unsub()
    }

  },[])

  async function handleMessage(){
    try {
      await addDoc(collection(db,'mensagens'),{
        mensagem:'olá',
        lido:false,
      })
    } catch (err) {
      console.log(err);
    }
  }
console.log(messages)
  
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
  <div class="button-logOut" onClick={() =>{signOut()}}>Sair</div>
  </Header>

  <Content>
    <section class="content-section">
      
    <div class="room-title">
      <h1>Sala de desenvolvimento web</h1>
    </div>

    <div class="messages">
        {messages.map((item)=>(
          
          <p key={item.id}>{item.mensagem}</p>
        ))}
    </div> 
    <textarea class="text-box"placeholder="Digite aqui!"></textarea>
    <div class="footer-content">
    <h1>Bem vindo {user ? user.email : ''}</h1>
    <div class="button" onClick={() =>{handleMessage()}}>Enviar</div>
    </div>
  </section>

    
    
      
    
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

export default Chat