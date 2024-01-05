import {useState} from 'react';
import {
  validateConfirmPassword,
  validateEmail,
  validateMediaReview,
  validateMediaSize,
  validateMinimumChar,
  validateMinMaxChar,
  validateMinMaxPrice,
  validateName,
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
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
        if (key === 'password' || key === 'prev_password') {
          validate = validatePassword(value, form.password.status);
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
        if (key === 'confirm_password') {
          const {password} = formNew || form;
          validate = validateConfirmPassword(
            password.value,
            value,
            form.password.status,
          );
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
        if (key === 'phone_number') {
          let removeFirstZeroKey = ['phone_number'];
          value = removeFirstZeroKey.includes(key)
            ? text?.replace(/^0+/, '')
            : text?.toLowerCase();
          validate = validatePhoneNumber(value);
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
        if (key === 'address') {
          validate = validateMinMaxChar(label, value, 5, 100);
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
        if (key === 'name') {
          validate = validateName(label, value);
          error = validate.error;
          message = validate.message;
          customMessage = validate.customMessage;
        }
      } else {
        error = true;
        message = `${label} tidak boleh kosong`;
        customMessage = '${label} Wajib Diisi';
      }
    }

    return {error, message, value, customMessage};
  };

  const setFormValue = (key, value) => {
    if (key === '@reset') {
      /* ex: setForm('@reset') */
      return setForm(initalForm);
    } else if (key === '@override') {
      /* ex: setForm('@override', {...form, ...formNew}) */
      return setForm(value);
    } else {
      /* ex: setForm('email', value) */
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

      if (key === 'min' || key === 'max') {
        let {min, max} = formNew;
        validate = validateMinMaxPrice(
          min.label,
          max.label,
          Number(min.value),
          Number(max.value),
        );
        validate[key].value = value;
        formNew = {
          ...formNew,
          min: {
            ...min,
            ...validate.min,
          },
          max: {
            ...max,
            ...validate.max,
          },
        };
      }

      setForm(formNew);
    }
  };

  return [form, setFormValue];
};
