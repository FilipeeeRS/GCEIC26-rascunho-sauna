// --- FUNÇÕES DE TESTE / BASE (Que já estavam aí) ---

const TABELA = {
  BASE_CALC: {
    faixas: [
     { ate: 15, alicota: 0.01 },
     { ate: 30, alicota: 0.03 },
    ],
  },
  REFERENCIA : 20/100,
};

function calcularArea(base,altura) {
  if (base <= 0) throw new Error('Base com valor errado');
  if (altura <=0) throw new Error('Altura com valor errado');
  let resultado = 0;
  resultado = base * altura;
  return resultado.toFixed(2);
}

function calcular(dados) {
  console.log(dados); 
  const {altura = 0, largura = 0 ,} = dados;   
  if (altura <= 0) throw new Error('Base com valor errado');
  if (largura <=0) throw new Error('Altura com valor errado');
  let resultado = 0;
  resultado = largura * altura;
  return resultado.toFixed(2);
}

// --- FUNÇÕES DO PROJETO SAUNACALC ELITE ---

const tiposSauna = {
    seca: { precoPorKw: 300, manutencaoMensal: 80 },
    vapor: { precoPorKw: 350, manutencaoMensal: 50, custoHidraulicaFixo: 2000 },
    infravermelha: { precoPorKw: 250, manutencaoMensal: 40 }
};

function encontrarPotencia(volumeM3) {
    if (volumeM3 <= 6) return 6;
    if (volumeM3 <= 10) return 9;
    if (volumeM3 <= 15) return 12;
    return 15; // para volumes até 20m3
}

function calcularCustoKit(tipo, volumeM3) {
    if (!tiposSauna[tipo]) throw new Error("Tipo de sauna inválido");
    
    const potenciaKW = encontrarPotencia(volumeM3);
    const configTipo = tiposSauna[tipo];
    const custoKit = potenciaKW * configTipo.precoPorKw;
    
    return {
        tipo,
        volumeM3,
        potenciaKW,
        custoKit
    };
}

// --- EXPORTAÇÃO ÚNICA DE TUDO ---
module.exports = {
  calcularArea,
  TABELA,
  calcular,
  calcularCustoKit,
  encontrarPotencia
};