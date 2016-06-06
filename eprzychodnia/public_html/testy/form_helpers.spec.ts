import { ValidationService } from '/testy/form_helpers.ts';
describe('PESEL', () => {
  it('dobry pesel', () => {
      let obiekt = [];
      let pesels = new Array("97021919969", "75090610255", "38063019473", "40111217324", "28041700631", "67052416911", "86042612768", "53051214100", "72070507839", "88122604717");
      for(let ob in pesels)
      {
        obiekt.value = ob;
        expect(null).toEqual(ValidationService.peselValidator(obiekt));
      }
      

  });
  it('zly pesel', () => {
      let obiekt = [];
      let pesels = new Array("97021919967", "75090610254", "38063019473", "40111217327", "28041700638", "67052416912", "86042612764", "53021214100", "72d70507839", "88102604717");
      for(let ob in pesels)
      {
        obiekt.value = ob;
        expect(null).not.toEqual(ValidationService.peselValidator(obiekt));
      }

  });
});