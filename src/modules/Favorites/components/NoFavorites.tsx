import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"
import { Heart } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const NoFavorites = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No hay ciudades favoritas
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          startIcon={<Heart />}
        >
          Agregar favoritos
        </Button>
      </Box>
    )
}