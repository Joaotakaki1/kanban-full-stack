import Topbar from './TopBar';
import { useState } from 'react';
import CreateModal from './CreateModal';
import {Stack, Typography, Grid, IconButton, Box} from '@mui/material'
import NoBoards from "./NoBoards"
import BoardCard from "./BoardCard"
const BoardScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards/> */}
      <Stack mt={3} px={3}>
        <Grid container spacing={4}>
            <BoardCard></BoardCard>
            
        </Grid>
      </Stack>
    </>
  )
}

export default BoardScreen