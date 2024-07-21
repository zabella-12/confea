import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Heading, Table, Tbody, Tr, Td } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', total: 12, finalizadas: 8, pendente: 4 },
    { name: 'Fev', total: 15, finalizadas: 12, pendente: 3 },
    { name: 'Mar', total: 20, finalizadas: 18, pendente: 2 },
    // Adicione mais dados conforme necessário
];

export function DashboardContent() {
    return (
        <Box p={4}>
            <Heading size="lg" mb={6}>Dashboard do Profissional</Heading>
            <Box mb={6}>
                <Heading size="md" mb={4}>Dados Cadastrais</Heading>
                <Table variant="striped">
                    <Tbody>
                        <Tr>
                            <Td>Registro Nacional</Td>
                            <Td>123.456.789-00</Td>
                        </Tr>
                        <Tr>
                            <Td>Tipo de Registro</Td>
                            <Td>Registro Definitivo de Profissional (Diplomado no País)</Td>
                        </Tr>
                        <Tr>
                            <Td>Situação do Registro</Td>
                            <Td>Ativo</Td>
                        </Tr>
                        <Tr>
                            <Td>Último ano de pago</Td>
                            <Td>2024 (1/1)</Td>
                        </Tr>
                        <Tr>
                            <Td>Nome</Td>
                            <Td>Paulo Luiz</Td>
                        </Tr>
                        <Tr>
                            <Td>Títulos</Td>
                            <Td>123456 - Engenheiro Civil</Td>
                        </Tr>
                        <Tr>
                            <Td>Atribuição</Td>
                            <Td>Artigo 7 da Resolução 218 de 29.06.73, do CONFEA</Td>
                        </Tr>
                        <Tr>
                            <Td>E-mail</Td>
                            <Td>paulo_teste@gmail.com</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4} mb={6} >

                <Stat border='1px' borderColor='gray.200' p={3}>
                    <StatLabel>Total de ARTs</StatLabel>
                    <StatNumber>20</StatNumber>
                </Stat>
                <Stat border='1px' borderColor='gray.200' p={3}>
                    <StatLabel>ARTs não finalizadas</StatLabel>
                    <StatNumber>2</StatNumber>
                </Stat>
                <Stat border='1px' borderColor='gray.200' p={3}>
                    <StatLabel>ARTs concluídas</StatLabel>
                    <StatNumber>18</StatNumber>
                </Stat>
            </SimpleGrid>

            <Heading size="md" mb={4}>Gráficos de ARTs</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                <Box>
                    <Heading size="sm" mb={2}>ARTs por Mês</Heading>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="total" stroke="#8884d8" />
                            <Line type="monotone" dataKey="finalizadas" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="pendente" stroke="#ff7300" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>

                <Box>
                    <Heading size="sm" mb={2}>Distribuição de ARTs</Heading>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" />
                            <Bar dataKey="finalizadas" fill="#82ca9d" />
                            <Bar dataKey="pendente" fill="#ff7300" />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
