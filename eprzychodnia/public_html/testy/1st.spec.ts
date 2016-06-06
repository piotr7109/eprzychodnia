import {ValidationService} from "app/services/form/form_helpers.ts";
var pesel = 92060603556;
describe('1st tests', () => {
  it('true is true', () => expect(true).toEqual(true));
  it('null is not the same thing as undefined',
  () => expect(true).toEqual(sprawdzPesel(pesel))
);
});


