import { factorial } from './prueba';

describe ('Test del fichero prueba.ts', () => {
    beforeEach (() => {});
    it('should be -120 when n = -5', () => {
        expect(factorial (-5)).toEqual(-120);
    });
    it('should be 0 when n = 0', () => {
        expect(factorial (0)).toEqual(0);
    });
    it('should be 120 when n = 5', () => {
        expect(factorial (5)).toEqual(120);
    });
});
