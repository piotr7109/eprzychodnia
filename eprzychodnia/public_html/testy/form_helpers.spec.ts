import { ValidationService } from '/testy/form_helpers.ts';
describe('PESEL', () => {
  it('dobry pesel', () => {
      let obiekt;
      obiekt.value = 92060603556;
      expect(null).toEqual(ValidationService.peselValidator(obiekt));
      

  });
  it('zly pesel', () => {
      let obiekt;
      obiekt.value = 92060603557;
      expect(null).not.toEqual(ValidationService.peselValidator(obiekt));
      

  });
});