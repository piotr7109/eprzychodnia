import {ValidationService} from 'testy/form_helpers.ts'
describe('1st tests', () => {
  it('true is true', () => expect(true).toEqual(true));
  it('null is not the same thing as undefined',
  () => expect(true).toEqual(peselValidator(92060603556))
);
});


