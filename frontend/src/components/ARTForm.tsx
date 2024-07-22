// components/ARTForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';

interface FormData {
    responsavel: string;
    titulo: string;
    empresa: string;
    contratante: string;
    endereco_contr: string;
    cidade_contr: string;
    uf_contr: string;
    cep_contr: string;
    cpf_cnpj_contr: string;
    valor_contr: string;
    proprietario: string;
    endereco_prop: string;
    cidade_prop: string;
    uf_prop: string;
    cep_prop: string;
    cpf_cnpj_prop: string;
    data_inicio: string;
    data_termino: string;
    custo_obra: string;
    dimensao_obra: string;
    memorial: string;
    observacoes: string;
    situacao: string;
    acessibilidade: boolean;
    entidade_classe: string;
}

export function ARTForm() {
    const [formData, setFormData] = useState<FormData>({
        responsavel: '',
        titulo: '',
        empresa: '',
        contratante: '',
        endereco_contr: '',
        cidade_contr: '',
        uf_contr: '',
        cep_contr: '',
        cpf_cnpj_contr: '',
        valor_contr: '',
        proprietario: '',
        endereco_prop: '',
        cidade_prop: '',
        uf_prop: '',
        cep_prop: '',
        cpf_cnpj_prop: '',
        data_inicio: '',
        data_termino: '',
        custo_obra: '',
        dimensao_obra: '',
        memorial: '',
        observacoes: '',
        situacao: '',
        acessibilidade: false,
        entidade_classe: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, ariaChecked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (ariaChecked as any) : value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await axios.post('/api/art', formData);
        setFormData({
            responsavel: '',
            titulo: '',
            empresa: '',
            contratante: '',
            endereco_contr: '',
            cidade_contr: '',
            uf_contr: '',
            cep_contr: '',
            cpf_cnpj_contr: '',
            valor_contr: '',
            proprietario: '',
            endereco_prop: '',
            cidade_prop: '',
            uf_prop: '',
            cep_prop: '',
            cpf_cnpj_prop: '',
            data_inicio: '',
            data_termino: '',
            custo_obra: '',
            dimensao_obra: '',
            memorial: '',
            observacoes: '',
            situacao: '',
            acessibilidade: false,
            entidade_classe: '',
        });
    };

    return (
        <Box p={4}>
            <form onSubmit={handleSubmit}>
                <FormControl id="responsavel" mb={4}>
                    <FormLabel>Responsável Técnico</FormLabel>
                    <Input name="responsavel" value={formData.responsavel} onChange={handleChange} />
                </FormControl>
                <FormControl id="titulo" mb={4}>
                    <FormLabel>Título Profissional</FormLabel>
                    <Input name="titulo" value={formData.titulo} onChange={handleChange} />
                </FormControl>
                <FormControl id="empresa" mb={4}>
                    <FormLabel>Empresa</FormLabel>
                    <Input name="empresa" value={formData.empresa} onChange={handleChange} />
                </FormControl>
                <FormControl id="contratante" mb={4}>
                    <FormLabel>Contratante</FormLabel>
                    <Input name="contratante" value={formData.contratante} onChange={handleChange} />
                </FormControl>
                <FormControl id="endereco_contr" mb={4}>
                    <FormLabel>Endereço do Contratante</FormLabel>
                    <Input name="endereco_contr" value={formData.endereco_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="cidade_contr" mb={4}>
                    <FormLabel>Cidade do Contratante</FormLabel>
                    <Input name="cidade_contr" value={formData.cidade_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="uf_contr" mb={4}>
                    <FormLabel>UF do Contratante</FormLabel>
                    <Input name="uf_contr" value={formData.uf_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="cep_contr" mb={4}>
                    <FormLabel>CEP do Contratante</FormLabel>
                    <Input name="cep_contr" value={formData.cep_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="cpf_cnpj_contr" mb={4}>
                    <FormLabel>CPF/CNPJ do Contratante</FormLabel>
                    <Input name="cpf_cnpj_contr" value={formData.cpf_cnpj_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="valor_contr" mb={4}>
                    <FormLabel>Valor do Contrato</FormLabel>
                    <Input type="number" name="valor_contr" value={formData.valor_contr} onChange={handleChange} />
                </FormControl>
                <FormControl id="proprietario" mb={4}>
                    <FormLabel>Proprietário</FormLabel>
                    <Input name="proprietario" value={formData.proprietario} onChange={handleChange} />
                </FormControl>
                <FormControl id="endereco_prop" mb={4}>
                    <FormLabel>Endereço do Proprietário</FormLabel>
                    <Input name="endereco_prop" value={formData.endereco_prop} onChange={handleChange} />
                </FormControl>
                <FormControl id="cidade_prop" mb={4}>
                    <FormLabel>Cidade do Proprietário</FormLabel>
                    <Input name="cidade_prop" value={formData.cidade_prop} onChange={handleChange} />
                </FormControl>
                <FormControl id="uf_prop" mb={4}>
                    <FormLabel>UF do Proprietário</FormLabel>
                    <Input name="uf_prop" value={formData.uf_prop} onChange={handleChange} />
                </FormControl>
                <FormControl id="cep_prop" mb={4}>
                    <FormLabel>CEP do Proprietário</FormLabel>
                    <Input name="cep_prop" value={formData.cep_prop} onChange={handleChange} />
                </FormControl>
                <FormControl id="cpf_cnpj_prop" mb={4}>
                    <FormLabel>CPF/CNPJ do Proprietário</FormLabel>
                    <Input name="cpf_cnpj_prop" value={formData.cpf_cnpj_prop} onChange={handleChange} />
                </FormControl>
                <FormControl id="data_inicio" mb={4}>
                    <FormLabel>Data de Início</FormLabel>
                    <Input type="date" name="data_inicio" value={formData.data_inicio} onChange={handleChange} />
                </FormControl>
                <FormControl id="data_termino" mb={4}>
                    <FormLabel>Data de Término</FormLabel>
                    <Input type="date" name="data_termino" value={formData.data_termino} onChange={handleChange} />
                </FormControl>
                <FormControl id="custo_obra" mb={4}>
                    <FormLabel>Custo da Obra</FormLabel>
                    <Input type="number" name="custo_obra" value={formData.custo_obra} onChange={handleChange} />
                </FormControl>
                <FormControl id="dimensao_obra" mb={4}>
                    <FormLabel>Dimensão da Obra</FormLabel>
                    <Input name="dimensao_obra" value={formData.dimensao_obra} onChange={handleChange} />
                </FormControl>
                <FormControl id="memorial" mb={4}>
                    <FormLabel>Memorial</FormLabel>
                    <Textarea name="memorial" value={formData.memorial} onChange={handleChange} />
                </FormControl>
                <FormControl id="observacoes" mb={4}>
                    <FormLabel>Observações</FormLabel>
                    <Textarea name="observacoes" value={formData.observacoes} onChange={handleChange} />
                </FormControl>
                <FormControl id="situacao" mb={4}>
                    <FormLabel>Situação</FormLabel>
                    <Input name="situacao" value={formData.situacao} onChange={handleChange} />
                </FormControl>
            </form>
        </Box>
    )
}