


import Routes from './routes'

import {UsuarioProvider} from './contexts/user'

import './services/firebase'

import GlobalStyle from './globalStyles'


function App() {
  return (
    <UsuarioProvider>
    <GlobalStyle/>
    <Routes/>
    </UsuarioProvider>
  );
}

export default App;
