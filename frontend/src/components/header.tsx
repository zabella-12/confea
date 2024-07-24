import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Link,
    Heading,
    Avatar,
    AvatarBadge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="#4a89d3" w="100%" p={4} color="white">
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Menu isLazy>
                        <MenuButton>
                            <Link href='./dashboardContent'>
                                <Avatar>
                                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                                </Avatar>
                            </Link>
                        </MenuButton>
                        <MenuList bg='grey'>

                            <MenuItem bg='grey'>Configurações</MenuItem>
                            <MenuItem bg='grey'>Suporte</MenuItem>
                            <MenuItem bg='grey'>Sair</MenuItem>
                        </MenuList>
                    </Menu>

                    <Heading size="md" ml={4}>
                        Seja bem vindo Paulo Galvão
                    </Heading>
                </Flex>
                <IconButton
                    icon={<HamburgerIcon />}
                    variant="outline"
                    colorScheme="whiteAlpha"
                    onClick={onOpen}
                    display={{ base: 'block', md: 'none' }}
                    aria-label="Open Menu"
                />
            </Flex>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4} align="stretch">
                                <Link href="#">Minhas Informações</Link>
                                <Link href="#">Pendência(s)</Link>
                                <Link href="#">Anuidades Pagas</Link>
                                <Link href="#">ARTs (Elaboradas/Pendentes)</Link>
                                <Link href="#">ARTs (Registradas)</Link>
                                <Link href="#">ARTs (Todas)</Link>
                                <Link href="#">ARTs (Vinculada)</Link>
                                <Link href="#">Protocolo</Link>
                                <Link href="#">Contratantes Pessoa Física</Link>
                                <Link href="#">Contratantes Pessoa Jurídica</Link>
                                <Link href="#">Eventos</Link>
                                <Link href="#">Documento(s) de Fiscalização</Link>
                                <Link href="#">Certidões Emitidas</Link>
                                <Link href="#">Certidões em Análise</Link>
                                <Link href="#">Certidões Vencidas</Link>
                                <Link href="#">Certidões Canceladas</Link>
                                <Link href="#">Responsabilidade Técnica Ativas</Link>
                                <Link href="#">Sociedade em Empresas</Link>
                                <Link href="#">Guias pagas</Link>
                                <Link href="#">Guias Disponíveis</Link>
                                <Link href="#">Débitos</Link>
                                <Link href="#">Títulos</Link>
                                <Link href="#">Ressarcimentos</Link>
                                <Link href="#">Local de Trabalho</Link>
                                <Link href="#">Registros</Link>
                                <Link href="#">Eleições/indicações</Link>
                                <Link href="#">Contratante</Link>
                                <Link href="#">Cadastrar Contratante Pessoa Física</Link>
                                <Link href="#">Cadastrar Contratante Pessoa Jurídica</Link>
                                <Link href="#">Cadastrar Contratante pessoa Física em bloco</Link>
                                <Link href="#">Cadastrar Contratante pessoa Jurídica em bloco</Link>
                                <Link href="#">Pesquisar</Link>
                                <Link href="#">ART</Link>
                                <Link href="#">Preencher Anotações de Responsabilidade Técnica</Link>
                                <Link href="#">Pesquisar ART</Link>
                                <Link href="#">Baixar ART em bloco</Link>
                                <Link href="#">Livro de ordem</Link>
                                <Link href="#">Certidões</Link>
                                <Link href="#">Solicitar Certidão</Link>
                                <Link href="#">Pesquisar Certidão</Link>
                                <Link href="#">Protocolos</Link>
                                <Link href="#">Cadastrar Protocolo</Link>
                                <Link href="#">Pesquisar Protocolo</Link>
                                <Link href="#">Financeiro</Link>
                                <Link href="#">Pesquisar Boleto</Link>
                                <Link href="#">Anuidade</Link>
                                <Link href="#">Solicitar Ressarcimento</Link>
                                <Link href="#">Ferramentas</Link>
                                <Link href="#">Portfólio Profissional</Link>
                                <Link href="#">Alterar Título Principal</Link>
                                <Link href="#">Alterar E-mail e Opções de Recebimento</Link>
                                <Link href="#">Alterar Endereço e Contato Telefônico</Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
}
