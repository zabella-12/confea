// src/pages/index.tsx
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { DashboardContent } from '../components/dashboardContent';

export default function Home() {
    return (
        <Box>
            <Header />
            <Grid templateColumns={{ base: '1fr', md: '300px 1fr' }} gap={4}>
                <GridItem display={{ base: 'none', md: 'block' }}>
                    <Sidebar />
                </GridItem>
                <GridItem>
                    <DashboardContent />
                </GridItem>
            </Grid>
        </Box>
    );
}
