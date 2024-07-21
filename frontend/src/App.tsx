import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { DashboardContent } from './dashboardContent';

export function App() {
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

  )
}


