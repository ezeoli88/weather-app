import { Button } from "@mui/material"
import { Box } from "@mui/material"
import { Alert } from "@mui/material"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const ErrorOrNoData = ({ error }: { error: string }) => {
    const navigate = useNavigate();
    return (
        <Box>
        <Button
          startIcon={<ArrowLeft />}
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Alert severity="error">
          {error}
        </Alert>
      </Box>
    )
}