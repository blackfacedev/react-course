/* eslint-env mocha */

describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('It should happen this', () => {
        // espera que aconteca
        // Entrdada de dados / metado sum(2,2)
        // Espera retorno 4
        throw new Error('Just a n error');
      });
    });
    context('Case 2', () => {
      it('It should happen these', () => {
        // espera que aconteca
        // Entrdada de dados / metado sum(2,2)
        // Espera retorno 4
        throw new Error('just another error');
      });
      it('It should happen that', () => {
        // espera que aconteca
        // Entrdada de dados / metado sum(2,2)
        // Espera retorno 4
      });
    });
  });
});
