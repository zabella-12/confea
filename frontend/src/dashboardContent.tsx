import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export function DashboardContent() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4}>
                <Stat>
                    <StatLabel>Total de ARTs</StatLabel>
                    <StatNumber>20</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>ARTs não finalizadas</StatLabel>
                    <StatNumber>2</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>ARTs conclúidas</StatLabel>
                    <StatNumber>18</StatNumber>
                </Stat>
            </SimpleGrid>
        </Box>
    );
}
