// pages/api/art.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      responsavel,
      titulo,
      empresa,
      contratante,
      endereco_contr,
      cidade_contr,
      uf_contr,
      cep_contr,
      cpf_cnpj_contr,
      valor_contr,
      proprietario,
      endereco_prop,
      cidade_prop,
      uf_prop,
      cep_prop,
      cpf_cnpj_prop,
      data_inicio,
      data_termino,
      custo_obra,
      dimensao_obra,
      memorial,
      observacoes,
      situacao,
      acessibilidade,
      entidade_classe,
    } = req.body;

    try {
      const art = await prisma.aRT.create({
        data: {
          responsavel,
          titulo,
          empresa,
          contratante,
          endereco_contr,
          cidade_contr,
          uf_contr,
          cep_contr,
          cpf_cnpj_contr,
          valor_contr: parseFloat(valor_contr),
          proprietario,
          endereco_prop,
          cidade_prop,
          uf_prop,
          cep_prop,
          cpf_cnpj_prop,
          data_inicio: new Date(data_inicio),
          data_termino: new Date(data_termino),
          custo_obra: parseFloat(custo_obra),
          dimensao_obra,
          memorial,
          observacoes,
          situacao,
          acessibilidade: Boolean(acessibilidade),
          entidade_classe,
        },
      });
      res.status(201).json(art);
    } catch (error) {
      console.error("Erro ao salvar os dados", error);
      res.status(500).json({ error: "Erro ao salvar os dados" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
