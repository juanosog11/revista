import { sumar, restar } from './utils';

// Describe: Agrupa pruebas relacionadas
describe('Pruebas de Utilidades Matemáticas', () => {
  // Test: Una prueba individual
  test('Debe sumar dos números correctamente', () => {
    // Expect: La aserción o resultado esperado
    expect(sumar(5, 3)).toBe(8); // Esperamos que 5 + 3 sea 8
  });

  // Test: Otra prueba para una función diferente
  test('Debe restar dos números correctamente', () => {
    expect(restar(10, 4)).toBe(6); // Esperamos que 10 - 4 sea 6
  });
});
