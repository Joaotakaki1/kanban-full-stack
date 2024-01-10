import { useState } from 'react'
import { Dialog, Stack, Typography, Box, TextField, Button } from '@mui/material'
import ModalHeader from '../../components/layoult/ModalHeader'
import { colors } from '../../theme'
const CreateModal = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  return (
    <Dialog open fullWidth maxWidth="xs">  
        <Stack p={2} >
            <ModalHeader title="Create Board" ></ModalHeader>
            <Stack my={5} spacing={3} >
              <TextField value={name} onChange={e => setName(e.target.value)} label="Board Name"/>
              <Stack direction='row' spacing={1.5}>
                <Typography>Color: </Typography>
                  {/* colors é um vetor, basicamente estamos "percorrendo" o vetor e, para cada valor do vetor, está se criando um elemento (as bolinhas)
                  Quando as bolinhas sao clicadas, é acionada a funcao setColor que irá alterar o valor de color para o indice da cor
                  */}
                  {colors.map((clr, idx) => <Box
                  sx={{
                    cursor: 'pointer',
                    border: color === idx ? "3px solid #383838" :"none",
                    outline: color === idx ? `2px solid ${clr}`:"none",
                  }}
                  value={color}
                  key={clr}
                  height={25}
                  width={25}
                  backgroundColor={clr}
                  borderRadius="50%"
                  onClick = {
                    () => setColor(idx)
                  }
                  />)}
              </Stack>
            </Stack>
              <Button size="large" variant='contained' >Create</Button>
        </Stack>
    </Dialog>
  )
}

export default CreateModal