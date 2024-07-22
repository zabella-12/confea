// src/pages/artCad.tsx
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { ARTForm } from '../components/ARTForm';

export default function ArtCad() {
    return (
        <Box>
            <Header />
            <Grid templateColumns={{ base: '1fr', md: '300px 1fr' }} gap={4}>
                <GridItem display={{ base: 'none', md: 'block' }}>
                    <Sidebar />
                </GridItem>
                <GridItem>
                    <ARTForm />
                </GridItem>
            </Grid>
        </Box>
    );
}
