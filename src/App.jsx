import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthScreen from './screens/AuthScreen'
const App = () => {
  return <ThemeProvider theme={theme}>
    {/* Faz com que todas as telas tenham como padrão o tema feito */}
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        {/* Setando a tela de autenticacao como a base */}
        <Route  path="/" element={<AuthScreen/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App