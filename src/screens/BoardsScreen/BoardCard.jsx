import {Stack, Typography, Grid, IconButton, Box} from '@mui/material'
import OpenIcon from '@mui/icons-material/Launch'
const BoardCard = () => {
  return (
    <Grid item xs={3}>
            <Stack p={2} bgcolor="background.paper" borderLeft="5px solid" borderColor="white">
              <Stack direction="row"  justifyContent="space-between" alignItems="center" >
                <Box width="50%">
                    <Typography 
                    textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" fontWeight={400} variant='h6'
                    >Board Namefasdfasfsdfasfasdfasfdasfasfasf</Typography>
                </Box>
                <IconButton size="small">
                  <OpenIcon></OpenIcon>
                </IconButton>
              </Stack>
              <Typography variant="caption">Create at: 08/10/2003</Typography>
            </Stack>
          </Grid>
  )
}

export default BoardCard