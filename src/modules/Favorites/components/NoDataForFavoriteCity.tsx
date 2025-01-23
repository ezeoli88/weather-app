import { Alert } from "@mui/material"

export const NoDataForFavoriteCity = ({ cityName }: { cityName: string }) => {
    return (
        <>
        <Alert severity="warning">
          No hay datos disponibles para {cityName}
        </Alert>
      </>
    )
}
