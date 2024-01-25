import {useState} from 'react';
import {
  validateConfirmPassword,
  validateDesc,
  validateEmail,
  validateMediaReview,
  validateMediaSize,
  validateMinimumChar,
  validateMinMaxChar,
  validateMinMaxPrice,
  validateName,
  validateNIK,
  validatePassword,
  validatePhoneNumber,
  validateReferal,
} from './validation';

export const useForm = initalForm => {
  const [form, setForm] = useState(initalForm);

  const validateFormValue = (key, text, formNew) => {
    const {required, label} = form[key];
    let value = typeof text === 'string' ? text.trimStart() : text;
    let error = false;
    let message = '';
    let customMessage = '';
    let validate = {};

    if (text === ' ') value = '';

    if (required) {
      if (text) {
        if (key === 'email') {
          validate = validateEmail(value);
        } else if (key === 'password' || key === 'prev_password') {
          validate = validatePassword(value, form.password.status);
        } else if (key === 'confirm_password') {
          const {password} = formNew || form;
          validate = validateConfirmPassword(
            password.value,
            value,
            form.password.status,
          );
        } else if (key === 'phone_number') {
          // let removeFirstZeroKey = ['phone_number'];
          // value = removeFirstZeroKey.includes(key)
          //   ? text?.replace(/^0+/, '')
          //   : text?.toLowerCase();
          validate = validatePhoneNumber(value);
        } else if (key === 'address') {
          validate = validateMinMaxChar(label, value, 1, 345);
        } else if (key === 'name') {
          validate = validateName(label, value);
        } else if (key === 'desc') {
          validate = validateDesc(label, value);
        } else if (key === 'nik') {
          validate = validateNIK(label, value);
        } else if (key === 'dropdown') {
          // Custom validation for dropdown
          if (value === 'Pilih Label') {
            error = true;
            message = `${label} harus dipilih`;
            customMessage = `Pilih ${label}`;
          }
        } else if (key === 'imageReport') {
          if (value === null) {
            error = true;
            message = `${label} harus dipilih`;
          }
        }
        // Add more validation conditions for other input types as needed
        // ...
        error = validate.error;
        message = validate.message;
        customMessage = validate.customMessage;
      } else {
        error = true;
        message = `${label} tidak boleh kosong`;
        customMessage = `${label} Wajib Diisi`;
      }
    }

    return {error, message, value, customMessage};
  };

  const setFormValue = (key, value) => {
    if (key === '@reset') {
      return setForm(initalForm);
    } else if (key === '@override') {
      return setForm(value);
    } else {
      let payload = {};

      let validate = validateFormValue(key, value);
      payload = {
        value: validate.value,
        message: validate.message,
        error: validate.error,
      };

      let formNew = {
        ...form,
        [key]: {
          ...form[key],
          ...payload,
        },
      };

      if (key === 'password' || key === 'prev_password') {
        if (formNew?.confirm_password?.value) {
          validate = validateFormValue(
            'confirm_password',
            formNew.confirm_password.value,
            formNew,
          );
          payload = {
            value: validate.value,
            message: validate.message,
            error: validate.error,
          };
          formNew = {
            ...formNew,
            ['confirm_password']: {
              ...formNew['confirm_password'],
              ...payload,
            },
          };
        }
      }

      setForm(formNew);
    }
  };

  return [form, setFormValue];
};
