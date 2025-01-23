import { Alert } from "@mui/material"

export const Error = ({ error }: { error: string }) => {
    return (
        <Alert severity="error">
            {error}
        </Alert>
    )
}