import {AppBar, Button, Stack} from '@mui/material';
import LogoImg from '../../assets/logo-kanban.svg';
import LogoEl from '../../components/utils/LogoEl';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/ExitToApp';

const Topbar = () => {
  return (
    <AppBar position='sticky' >
        <Toolbar sx={{
            // vai fazer com que ops elementos da appbar preencham todo espaço que puderem
            justifyContent: 'space-between',
        }} >
            <LogoEl sx={{
                height:"40px"
            }} src={LogoImg} alt="Kanban App" />
            <Stack direction = "row" spacing={2}>
                <Button variant="contained" >Create Board</Button>
                {/* Start icon coloca um elemento antes do filho (a string logout) */}
                <Button startIcon={<LogoutIcon/>} color="inherit">Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Topbar