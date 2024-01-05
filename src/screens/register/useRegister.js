import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useForm} from '../../utils/form';

const useRegister = () => {
  const [form, setForm] = useForm({
    name: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Name',
    },
    phone: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Phone',
    },
    email: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Email',
    },
    password: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Password',
    },
    confirm_password: {
      value: '',
      required: true,
      error: false,
      message: '',
      label: 'Confirm Password',
    },
  });

  // const validateInputs = () => {
  //   console.log(inputs);

  //   Keyboard.dismiss();
  //   let valid = true;

  //   if (!inputs.name) {
  //     handleErrorMessage('Tidak boleh kosong', 'name');
  //   }

  //   if (!inputs.phone) {
  //     handleErrorMessage('Tidak boleh kosong', 'phone');
  //   }

  //   if (!inputs.email) {
  //     handleErrorMessage('Tidak boleh kosong', 'email');
  //     valid = false;
  //   } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
  //     handleErrorMessage('Email harus valid', 'email');
  //   }

  //   if (!inputs.password) {
  //     handleErrorMessage('Tidak boleh kosong', 'password');
  //   } else if (
  //     !inputs.password.match(
  //       '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
  //     )
  //   ) {
  //     handleErrorMessage(
  //       'Password harus diisi min. 8 karakter, huruf, angka, dan spesial karakter ',
  //       'password',
  //     );
  //   } else if (inputs.confirmPass != inputs.password) {
  //     handleErrorMessage('Password tidak sesuai', 'password');
  //   }

  //   if (!inputs.confirmPass) {
  //     handleErrorMessage('Tidak boleh kosong', 'confirmPass');
  //   } else if (inputs.confirmPass != inputs.password) {
  //     handleErrorMessage('Password tidak sesuai', 'confirmPass');
  //   }
  // };

  // const handleOnChange = (text, input) => {
  //   setInputs(prevState => ({...prevState, [input]: text}));
  // };

  // const handleErrorMessage = (errorMessage, input) => {
  //   setErrors(prevState => ({...prevState, [input]: errorMessage}));
  // };

  // const onPressShowPassword = () => {
  //   setShowPassowrd(!showPassword);
  // };

  // const onPressShowConfirmPassword = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  return {
    setForm,
    form,
  };
};

export default useRegister;
export {useRegister};
