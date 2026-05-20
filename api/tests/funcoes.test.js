// Importamos tudo o que precisamos de uma vez só
const { calcularArea, calcularCustoKit, encontrarPotencia } = require('../src/funcoes');

// --- TESTES ORIGINAIS (Funções de Área) ---
describe('Teste de unitario', () => {
    
    test('deve retornar calculos de area corretamente', () => {
        expect(calcularArea(2,3)).toBe("6.00");
    });

    test('deve lancar erro para valores invalidos de area', () => {
        expect(() => calcularArea(0,3)).toThrow(); 
        expect(() => calcularArea(3,0)).toThrow(); 
        expect(() => calcularArea(-10,3)).toThrow(); 
    });

});

// --- TESTES DO PROJETO SAUNA ELITE ---
describe('Testes das Funções de Cálculo da Sauna', () => {
    
    test('Deve encontrar a potência correta para 5m3', () => {
        expect(encontrarPotencia(5)).toBe(6);
    });

    test('Deve calcular o custo do kit para sauna seca de 5m3', () => {
        const resultado = calcularCustoKit('seca', 5);
        expect(resultado.potenciaKW).toBe(6);
        expect(resultado.custoKit).toBe(1800);
    });

    test('Deve lançar erro se o tipo de sauna for inválido', () => { 
        expect(() => calcularCustoKit('agua_fria', 10)).toThrow("Tipo de sauna inválido");
    });

});