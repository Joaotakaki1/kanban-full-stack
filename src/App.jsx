import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthScreen from './screens/AuthScreen'
import { onAuthStateChanged } from 'firebase/auth'
import {useEffect} from 'react';
import {auth } from './firebase';
import useStore  from './store'
import AppLoader from './components/layoult/AppLoader'
import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import PrivateRoute from './components/utils/PrivateRoute'
import BoardsScreen from './screens/BoardsScreen'
const App = () => {
  const {loader, setLoginStatus} = useStore();
  useEffect(() => {
    { /* Hook que é acionado quando a pagina é iniciada
        Quando o estado de autenticaoca muda, o onAuthStateChanged é acionado e seta o status de login com uma booleana (!! transforma em bool). Se realmente o login foi efetivo, !!user sera true, caso nao user será null e !!user será false
  */}
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });
    { /* o return desfaz a subscricao quando é desmontado
  */}
    return () => unsub();
  },[])

  if (loader) return <AppLoader/>;

  return <ThemeProvider theme={theme}>
    {/* Faz com que todas as telas tenham como padrão o tema feito */}
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        {/* Setando a tela de autenticacao como a base */}
        <Route  path="/" element={<PublicOnlyRoute Component={AuthScreen} />}/>
        <Route  path="/boards" element={<PrivateRoute Component={BoardsScreen} />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App