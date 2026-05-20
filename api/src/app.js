const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Centralizando as importações das funções no topo
const { TABELA, calcular, calcularCustoKit } = require('./funcoes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// --- ROTAS DE TESTE / UTILIDADES ---

// Checa se a API está no ar
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), by:'SLMM28', turma:'101' });
});

// Retorna as tabelas de referência
app.get('/api/tabelas', (req, res) => {
  res.json({
    success: true,
    data: {
      base: TABELA?.BASE_CALC?.faixas || "Não definida",
      referencia: TABELA?.REFERENCIA ? `${TABELA.REFERENCIA * 100}%` : "Não definida",
    },
  });
});

// --- ROTAS DO PROJETO SAUNA ---

// Endpoint de cálculo genérico (que já estava no seu código)
app.post('/api/calcular', (req, res) => {
  try {
    const dados = req.body;
    console.log("Dados recebidos em /calcular:", dados);

    if (!dados || typeof dados !== 'object') {
      return res.status(400).json({ error: 'Corpo da requisição inválido' });
    }
    
    const resultado = calcular(dados);
    console.log("Resultado:", resultado);
    return res.status(200).json({ success: true, data: resultado });

  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ success: false, error: err.message });
  }
});

// Endpoint obrigatório: Custo do Kit da Sauna
app.post('/SAUNA/custo-kit', (req, res) => {
    try {
        const { tipo, volumeM3 } = req.body;
        const resultado = calcularCustoKit(tipo, volumeM3);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

module.exports = app;