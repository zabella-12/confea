import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, VStack, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListItem, ListIcon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';



export function Sidebar() {
    return (
        <Box bg="gray.100" p={2} display={{ base: 'none', md: 'block' }}>
            <VStack spacing={4} align="stretch">
                <Accordion allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Minhas Informações</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pendência(s)</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Anuidades Pagas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">ARTs (Elaboradas/Pendentes)</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">ARTs (Registradas)</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">ARTs (Todas)</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">ARTs (Vinculada)</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Protocolo</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Contratantes Pessoa Física</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Contratantes Pessoa Jurídica</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Eventos</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Documento(s) de Fiscalização</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Certidões Emitidas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Certidões em Análise</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Certidões Vencidas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Certidões Canceladas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Responsabilidade Técnica Ativas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Sociedade em Empresas</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Guias Disponíveis</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Débitos</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Títulos</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Ressarcimentos</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Local de Trabalho</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Registros</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Eleições/indicações</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Contratante</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Cadastrar Contratante Pessoa Física</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Cadastrar Contratante Pessoa Jurídica</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Cadastrar Contratante Pessoa Física em bloco</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Cadastrar Contratante Pessoa Jurídica em bloco</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pesquisar</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">ART</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link as={RouterLink} to="/artCad">Preencher Anotações de Responsabilidade Técnica</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pesquisar ART</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Baixar ART em bloco</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Livro de ordem</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Certidões</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Solicitar Certidão</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pesquisar Certidão</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Protocolos</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Cadastrar Protocolo</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pesquisar Protocolo</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Financeiro</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Pesquisar Boleto</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Anuidade</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Solicitar Ressarcimento</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Ferramentas</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Portfólio Profissional</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Alterar Título Principal</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Alterar E-mail e Opções de Recebimento</Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} />
                                    <Link href="#">Alterar Endereço e Contato Telefônico</Link>
                                </ListItem>
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Box>
    );
}
