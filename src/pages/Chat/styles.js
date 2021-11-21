import styled from 'styled-components';

export const Main = styled.div`
display:flex;
min-height:10vh;
flex-direction:column;
`;

export const Header = styled.div`
  height:9vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:#AE1B73;
  border-radius: 0px 0px 8px 10px
  padding:5px;

  #logo{
    display:block;
    margin-left:35px;
  }
  
  #barr{
    display:flex;
    align-items:center;
    
    
  }
  
  .button{
    display:flex;
    font-size:18px;
    color:#fff;
    margin-right:80px;
    padding:15px;
    cursor:pointer;
    font-weight: bold;
  }
  .button:hover{ 
    color:#333;
  }

  .button-logOut{
    display:flex;
    height:40px;
    width:100px;
    border-radius:5px;
    border:1px solid #AE1B73;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background-color:#333;
    color:#fff;
    margin-right:20px;
    font-weight: bold;
  }
  .button-logOut:hover{
    background-color:#fff;
    color:#AE1B73;
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  height:77vh;
  padding:0px 15px;
  justify-content:space-between;

  .content-section{
    margin:0 20px;
  } 
  .messages{
    background-color:#fff;
    border-radius:5px;
    border:1px solid #AE1B73;
    height:40vh;
    width:100%;
    margin-bottom:15px;
  }
  .messages p{
    text-align:center;
    margin-top:30px;
  }
  .content-section p{
    color:black;
  }
  .text-box{
    width:100%;
    height:13vh;
    margin-top:20;
    border-radius:5px;
    border:1px solid #AE1B73;
    
  } 
  .button{
    display:flex;
    height:50px;
    width:150px;
    background-color:#AE1B73;
    border-radius:5px;
    border:1px solid #AE1B73;
    justify-content:center;
    align-items:center;
    color:#fff;
    margin-bottom:10px;
    margin-top:10px;
    cursor:pointer;

  }
  .button:hover{
    opacity:0.7;
  }
  .footer-content{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
  
`;

export const Footer = styled.div`
  display:flex;
  height:15vh;
  background-color:#AE1B73;

  #logo{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  #about{
    flex:4;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
  }

  #about p {
    font-size:12px;
    line-height:2px;
  }
  #social{
  flex:1;
  display:flex; 
  align-items:center;
  justify-content:space-evenly;
}`