import { useState } from 'react';
import { Container, Stack, TextField, Button, Typography} from '@mui/material'
import LogoEl from '../../components/utils/LogoEl';
import LogoImg from '../../assets/logo-kanban.svg';

const initForm = {
    email: '',
    password: '',
}

const AuthScreen = () => {
    {/* Inicializa uma variável que pode ser atualizada sem precisar recarregar a página
        Para att o valor, basta chamar a funcao setIsLogin */}
    const [isLogin, setIsLogin] =useState(true); {/* Indica se vai fazer login o registrar*/}
    const [form, setForm] =useState(initForm); {/* objeto para guardar email e senha*/}
    {/* Uma variável que é uma expressão lógica, ou seja, depende do resultado de uma expressao*/}
    const AuthText = isLogin ? "Do not have an account?" : "Already have an account?";

    {/* A funcao handleChange recebe event como parametro. Ela aciona a funcao setForm (att o estado de form). A funcao setForm acionada recebe uma outra funcao, que copia o estado anterior (os tres pontos) e atualiza parte deste objeto([chave]:valor) para o que esta escrito no textField(o .value) */}
    const handleChange = event => setForm((oldForm) => ({...oldForm,[event.target.name]:event.target.value,
    }));
    const handleAuth = async () => {

    }
  return (
    <Container 
    maxWidth="xs"
    sx={{ 
        mt: 10,
    }}>
            {/* todos os componentes vao estar como se fossem uma pilha*/}
        <Stack mb={4} spacing={4} alignItems={"center"} textAlign={"center"}>
            <LogoEl src={LogoImg} alt="Kanban App"/>
            <Typography color="rgba(255,255,255, .6)">
                Organize your tasks with the Kanban method!
                <br />
                Access your tasks Anytime, Anywhere!
            </Typography>
        </Stack>
        <Stack spacing={2} >
            {/* Quando houver alguma mudanca nos textfields, a funcao handleChange ira ser rodada*/}
            <TextField value={form.email} name="email" onChange={handleChange} label='E-mail'/>
            <TextField value={form.password} name="password" onChange={handleChange} label='Password'/>
            {/* A depender do valor da variavel isLogin, o texto no botao muda*/}
            <Button disabled={!form.email.trim() || !form.password.trim()} onClick={handleAuth}size="large" variant='contained'>{isLogin ? "Login" : "Register"}</Button>
        </Stack>
        {/* Altera o valor da variavel isLogin para o cointrario dela com o click*/}
        <Typography sx={{cursor: "pointer"}} onClick={() => setIsLogin(o => !o)} mt={2} textAlign='center'>{AuthText}</Typography>
    </Container>
  )
}

export default AuthScreen