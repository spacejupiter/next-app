import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface RegisterState {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface ErrorValues {
  isError: any;
  errorMessage: string;
}

interface RegisterHandlers {
  handleUserNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRepeatPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (router:any) => void;
  handleErrors: (data: ErrorValues) => void;
}

const useRegister = (): [RegisterState, RegisterHandlers, ErrorValues] => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errorValues, setErrorValues] = useState<ErrorValues>({
    isError: null,
    errorMessage: '',
  });

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = async (router:any) => {
    
    try {
      const options = {
        username: userName,
        password,
        email,
      };
      if (password !== repeatPassword) {

        throw new Error('password doesnt match')
      }
      const result = await axios.post('http://localhost:4700/api/auth/register', options);
      if (result.status === 201) {
        const messageValue: ErrorValues = {
          isError: false,
          errorMessage: 'user created'
        }
        handleErrors(messageValue)
        setTimeout(()=>{router.push('/login')},1000)
      }
    } catch (error:any) {
      if (axios.isAxiosError(error)) {
      // Axios error, 
      const errorValue: ErrorValues = {
        isError: true,
        errorMessage: error.response?.data ?? 'Unknown error',
      };
      handleErrors(errorValue);
      
      } else {
        handleErrors({isError:true,errorMessage:error.message});
     
    }
    }
  };

  const handleErrors = (data: ErrorValues) => {
    setErrorValues(data);
  };

  const state: RegisterState = {
    userName,
    email,
    password,
    repeatPassword,
  };

  const handlers: RegisterHandlers = {
    handleUserNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRepeatPasswordChange,
    handleSubmit,
    handleErrors,
  };

  return [state, handlers, errorValues];
};

export default useRegister;
