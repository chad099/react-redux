export const required = value => (value ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);

export const maxLength30 = maxLength(30);
export const maxLength254 = maxLength(254);
export const maxLength50 = maxLength(50);


const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength8 = minLength(8);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const string = value => (/^[a-z-_. ](?:_?[a-z0-9-_. ]+)*$/i.test(value)) ? undefined : 'Must start with letter';

export const dateFormat = value => (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value)) ? undefined : 'Should be in DD-MM-YYYY';
export const email = value => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) ? undefined : 'Must be a valid email address';

export const card = value => (/^[0-9]{16}$/.test(value)) ? undefined : 'Must be 16 digit long.';
export const mobile = value => (/^[0-9]{10}$/.test(value)) ? undefined : 'Must be 10 digit long.';
export const cardPinCode = value => (/^[0-9]{4}$/.test(value)) ? undefined : 'Must be 4 digit long.';
export const password = value => (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value))? undefined: "Minimum 8 characters with at least one alpha, one numeric, and one special character, max length 254";
