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
    margin-right:450px;
    
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
`;

export const Content = styled.div`
  display:flex;  
  height:95vh;
  flex-direction:column;

  .faixa{
    align-items: center;
    justify-content: center;
    height: 70px;
    display: flex;
    color:black;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;   
    width: 100%;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top:20px;
       
    }
   
  
  .container .post{    
      display: block;
      margin: 10px;
  }

   .container .post .post-titulo{
    font-size: 20px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
 .container .post .post-imagem img{
  width: 180px;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: scale-down;

}

.container .post .post-descricao{
    width: 250px;
    height: 30px;
    padding: 5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
}
 .container .post .post-descricao .descricao-text{
    align-items: center;
    color:green;
}

.container .post .post-descricao .descricao-text span{
  align-items: center;
  color:red;
}
 .container .post .post-bnt {
    border: 0.8px solid rgb(211, 211, 211);
    padding: 10px;
    margin-top: 10px;
    text-align: center;
    height: 35px;
    width: 180px;
    background:#4d4f53;
    color: #fff;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    
}
.container .post .post-bnt a{
    color: #fff;
    justify-content: center;  
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