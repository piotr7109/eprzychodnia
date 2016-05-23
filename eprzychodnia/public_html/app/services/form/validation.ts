export class ValidationService {
    
    
    static getValidatorErrorMessage(code: string) {
        let config = {
          'required': 'Pole wymagane',
          'invalidEmail': 'To nie jest poprawny adres e-mail',
          'invalidPesel': 'Niepoprawny numer PESEL',
          'NaN': 'To pole powinno być liczbą'
        };
        return config[code];
    }
    
    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }
    static numberValidator(control) {
        if (control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { 'NaN': true };
        }
    }
    static peselValidator(control) {
        if (control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { 'invalidPesel': true };
        }
    }
}