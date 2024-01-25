import {useState} from 'react';
import {useForm} from '../../utils/form';
import axios from 'axios';
import {ENDPOINT} from '../../utils/endpoint';

const useLogin = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const [form, setForm] = useForm({
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
  });

  // const onSubmitLogin = async () => {
  //   try {
  //     const response = await axios.post(ENDPOINT.AUTH.LOGIN, {
  //       email: form.email,
  //       password: form.password,
  //     });

  //     // Handle respons dari server sesuai dengan kebutuhan aplikasi Anda
  //     console.log('Login success:', response.data);

  //     // Contoh: Navigasi ke halaman setelah login berhasil
  //     // navigation.navigate('Home');
  //   } catch (error) {
  //     // Handle error, misalnya menampilkan pesan error kepada pengguna
  //     console.error('Login error:', error.message);
  //   }
  // };

  return {
    rememberMe,
    setRememberMe,
    // onSubmitLogin,
    setForm,
    form,
  };
};

export default useLogin;
export {useLogin};
