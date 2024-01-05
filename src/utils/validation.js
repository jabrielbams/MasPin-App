export const validatePassword = (password, type) => {
  let message = '';
  let error = false;
  let nonAlphanumeric = password.match(
    /([^a-zA-Z\d])+([a-zA-Z\d])+|([a-zA-Z\d])+([^a-zA-Z\d])+/,
  );
  let noWhitespace = password?.includes(' ');
  let minLength = 8;
  const valPass = 'Validate New Password';

  const validPassword = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))',
  ).test(password);

  if (
    type !== valPass &&
    noWhitespace &&
    password.length > 0 &&
    password.length < minLength
  ) {
    error = true;
    message = '';
  } else if (!validPassword && type === valPass) {
    error = true;
    message =
      'Kata sandi harus memiliki minimal 8 karakter, terdiri dari huruf kapital, huruf kecil, dan angka.';
  } else {
    error = false;
    message = '';
  }
  return {message, error};
};

export const validateConfirmPassword = (prev_password, password, type) => {
  let message = '';
  let error = false;
  let nonAlphanumeric = password.match(
    /([^a-zA-Z\d])+([a-zA-Z\d])+|([a-zA-Z\d])+([^a-zA-Z\d])+/,
  );
  let noWhitespace = password?.includes(' ');
  let minLength = 8;
  const valPass = 'Validate New Password';

  const validPassword = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))',
  ).test(password);

  if (
    type !== valPass &&
    noWhitespace &&
    password.length > 0 &&
    password.length < minLength
  ) {
    error = true;
    message = '';
  } else if (!validPassword && type === valPass) {
    error = true;
    message =
      'Kata sandi harus memiliki minimal 8 karakter, terdiri dari huruf kapital, huruf kecil, dan angka.';
  } else if (prev_password !== password) {
    error = true;
    message = 'Password tidak sesuai';
  }

  return {message, error};
};

export const validateMinMaxChar = (label, text, min, max, type) => {
  let message = '';
  let error = false;

  if (text?.length < min) {
    error = true;
    message = `${label} terlalu pendek`;
  }
  if (max && text?.length >= max) {
    error = true;
    message = `${label} maksimal ${max} karakter`;
  }
  if (type === 'no-special-character') {
    let regexSpecialCharacter = /[^a-zA-Z0-9 ]/;
    if (regexSpecialCharacter.test(text)) {
      error = true;
      message = `${label} tidak boleh menggunakan spesial karakter`;
    }
  }
};

export const validateName = (label, text) => {
  let message = '';
  let error = false;
  let regexSpecialCharacter = /[^a-zA-Z0-9 ]/;

  if (text.length <= 1) {
    error = true;
    message = `${label} terlalu pendek`;
  }
  if (text.length >= 50) {
    error = true;
    message = `${label} terlalu panjang`;
  }
  if (regexSpecialCharacter.test(text)) {
    error = true;
    message = `${label} tidak boleh menggunakan spesial karakter`;
  }

  return {message, error};
};

export const validatePhoneNumber = number => {
  let message = '';
  let error = false;
  let validateNumber = number.match(/^([0-9]*)$/);
  let validateLength = number.length >= 9;
  let validateMaxLength = number.length <= 12;

  if (!validateNumber) {
    message =
      'No. Handphone hanya dapat diinput angka, tanpa spasi atau tanda baca';
    error = true;
  } else if (!validateLength) {
    message = 'No. Handphone terlalu pendek';
    error = true;
  } else if (!validateMaxLength) {
    message = 'No. Handphone maksimum 13 karakter';
    error = true;
  }

  return {message, error};
};

export const validateEmail = email => {
  let message = '';
  let error = false;
  let validate = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  if (validate === null) {
    message = 'Email tidak sesuai';
    error = true;
  }

  return {message, error};
};
