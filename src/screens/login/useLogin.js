import {useState} from 'react';
import {useForm} from '../../utils/form';

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

  return {
    rememberMe,
    setRememberMe,
    setForm,
    form,
  };
};

export default useLogin;
export {useLogin};
