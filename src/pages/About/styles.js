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
 
  height:77vh;
  
  .about{
    display: flex;
    margin-top:50px;
    justify-content: center;
   }
   .about-content{
     max-width: 800px;
     text-align: center;
     position: relative;
     padding:15px;
     margin-top: 50px;
     flex: 0 0 60%;
   }
   .about-content h1{
     padding:20px;
   }
   .about-content span{
     color:#AE1B73;
     font-size: 40px;
   }
   .about-content .about-text{
    margin: 10px 180px 20px 180px;
     color:rgb(255, 22, 22);
   }
   .about-content .about-text a{
      color:rgb(0, 0, 0);
    }
   
   .about-content .about-btn{
     border: 2px solid #AE1B73;
     border-radius: 8px;
     padding:10px;
     font-size:30px;
   
   }

   
   .about-content-img{
     margin-top: 80px;
     width: 450px;
     flex: 0 0 40%;
     }
   .about-content-img img{
   width: 450px;
   
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