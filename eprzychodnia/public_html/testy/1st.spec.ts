import {ValidationService} from 'app/services/form/form_helpers.ts'

describe('ValidationService'), () => {
    if('pesel', () => {
        let obiekt;
        obiekt.value = 92060603556;
        let peselOk = ValidationService.peselValidator(obiekt)
        expect(peselOk).toEqual(true);
    })
}
    
        
            
 //               describe('1st tests', () => {
  //it('true is true', () => expect(true).toEqual(true));
  //it('null is not the same thing as undefined',
 // () => expect(true).toEqual(true)
//);
//});


