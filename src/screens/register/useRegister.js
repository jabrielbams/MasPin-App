import {useState} from 'react';
import {Keyboard} from 'react-native';

const useRegister = () => {
  const [showPassword, setShowPassowrd] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const validateInputs = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.name) {
      handleErrorMessage('Tidak boleh kosong', 'name');
    }

    if (!inputs.phone) {
      handleErrorMessage('Tidak boleh kosong', 'phone');
    }

    if (!inputs.email) {
      handleErrorMessage('Tidak boleh kosong', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleErrorMessage('Email harus valid', 'email');
    }

    if (!inputs.password) {
      handleErrorMessage('Tidak boleh kosong', 'password');
    } else if (
      !inputs.password.match(
        '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      )
    ) {
      handleErrorMessage(
        'Password harus diisi min. 8 karakter, huruf, angka, dan spesial karakter ',
        'password',
      );
    } else if (inputs.confirmPass != inputs.password) {
      handleErrorMessage('Password tidak sesuai', 'password');
    }

    if (!inputs.confirmPass) {
      handleErrorMessage('Tidak boleh kosong', 'confirmPass');
    } else if (inputs.confirmPass != inputs.password) {
      handleErrorMessage('Password tidak sesuai', 'confirmPass');
    }
  };

  console.log(errors.name);

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleErrorMessage = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const onPressShowPassword = () => {
    setShowPassowrd(!showPassword);
  };

  const onPressShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    function: {
      onPressShowPassword,
      onPressShowConfirmPassword,
      handleOnChange,
      handleErrorMessage,
      validateInputs,
    },
    showPassword,
    showConfirmPassword,
    inputs,
    errors,
  };
};

export default useRegister;
export {useRegister};
