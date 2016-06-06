import { ValidationService } from '/testy/form_helpers.ts';
describe('PESEL', () => {
  it('valid pesel', () => {
      let obiekt = [];
      let pesels = new Array("97021919969", "75090610255", "38063019473", "40111217324", "28041700631", "67052416911", "86042612768", "53051214100", "72070507839", "88122604717");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).toEqual(ValidationService.peselValidator(obiekt));
      }
      

  });
  it('wrong pesel', () => {
      let obiekt = [];
      let pesels = new Array("97021919967", "75090610254", "3806301947t", "40111217327", "28041700638", "67052416912", "86042612764", "53021214100", "72d70507839", "88102604717");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).not.toEqual(ValidationService.peselValidator(obiekt));
      }

  });
  
  it('valid number', () => {
      let obiekt = [];
      let pesels = new Array("123123", "645646", "34563456");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).toEqual(ValidationService.numberValidator(obiekt));
      }
      

  });
  it('wrong number', () => {
      let obiekt = [];
      let pesels = new Array("123123a", "asdad1231", "12312ds323", "asdads");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).not.toEqual(ValidationService.numberValidator(obiekt));
      }

  });
  
  it('valid e-mail', () => {
      let obiekt = [];
      let pesels = new Array("asddas@asdasd.pl", "poczta.asd@poczta.pl", "sdaas@asd.pl");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).toEqual(ValidationService.emailValidator(obiekt));
      }
      

  });
  it('wrong e-mail', () => {
      let obiekt = [];
      let pesels = new Array("aassd", "asd@asd", "asd@asd", "asd@asd.");
      for(let ob in pesels)
      {
        obiekt.value = pesels[ob];
        expect(null).not.toEqual(ValidationService.emailValidator(obiekt));
      }

  });
});