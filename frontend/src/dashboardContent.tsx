import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Heading, Table, Tbody, Tr, Td, Card, CardBody, Stack, Divider, CardHeader, CardFooter, Image, ButtonGroup, Button } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, Text } from 'recharts';

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



            <Heading size="md" mb={4}>Resumo mês atual</Heading>
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

            <Heading size="md" mb={4}>Principais Notícias</Heading>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} mb={2} mt={4}>

                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.mutua.com.br/wp-content/uploads/2024/04/programadeinclusaoPIM.jpg'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Como podem ser utilizados os recursos do benefício</Heading>
                            <Text>
                                O Programa de Inclusão da Mútua (PIM) representa uma iniciativa significativa na promoção da igualdade e inclusão social, oferecendo um leque de recursos para apoiar associados e dependentes com deficiência.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Leia mais
                        </Button>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.mutua.com.br/wp-content/uploads/2024/04/tecnoprev.jpg'
                            borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Campanha da Mútua reforça a importância da previdência complementar para um futuro tranquilo</Heading>
                            <Text>
                                A campanha lançada pela Mútua no último mês destaca a importância crucial da previdência complementar como um pilar para garantir um futuro tranquilo e financeiramente seguro.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Leia mais
                        </Button>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.mutua.com.br/wp-content/uploads/2024/05/WPPNACIONALMUTUA_CAPADEMATERIA_DESKTOP_POST.png'
                            borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Atendimento da Mútua na palma da sua mão</Heading>
                            <Text>
                                A Mútua lança nesta quarta-feira, 15 de maio, seu canal de atendimento pela plataforma de mensagens. Então, anota aí o número do WhatsApp da Mútua e já salve em seus contatos (61) 3348-0222.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Leia mais
                        </Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>

    );
}
