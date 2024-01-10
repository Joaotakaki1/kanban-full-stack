import {Stack, Typography} from '@mui/material'

const NoBoards = () => {
  return (
    <Stack textAlign="center" spacing={1} mt={6} >
        <Typography variant="h5">No boards created</Typography>
        <Typography>No boards created, create one!</Typography>
      </Stack>
  )
}

export default NoBoards