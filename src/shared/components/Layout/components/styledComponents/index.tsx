import { Box, Container, styled } from '@mui/material';

export const Footer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
}));

export const MainContent = styled(Container)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(4),
}));
