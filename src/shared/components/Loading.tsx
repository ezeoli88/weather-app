import { CircularProgress } from "@mui/material"
import { Box } from "@mui/material"

export const Loading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
}