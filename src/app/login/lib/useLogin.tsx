import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface LoginValues {
  username: string;
  password: string;
}

interface ErrorValues {
  isError: any;
  errorMessage: string;
}

interface LoginHandlers {
  handleUsername: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (router:any) => void;
  handleErrors: (data: ErrorValues) => void;
   loginFacebook: () => void;
}

function useLogin(): [LoginValues, LoginHandlers,ErrorValues] {
  const [loginValues, setLoginValues] = useState<LoginValues>({
    username: '',
    password: '',
  });
  
  const [errorValues, setErrorValues] = useState<ErrorValues>({
    isError: null,
    errorMessage: '',
  });

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginValues((prevValues) => ({
      ...prevValues,
      username: e.target.value,
    }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginValues((prevValues) => ({
      ...prevValues,
      password: e.target.value,
    }));
  };

  const loginFacebook = () => {
   
  }

  const handleSubmit = async (router:any) => {
    try {
      const options = {
        email: loginValues.username,
        password: loginValues.password,
      };
      const result = await axios.post(
        'http://localhost:4700/api/login/local',
        options
      );

      console.log(result)
      if (result.status === 200) {
        router.push('/userpage/local')
      }
      //set the token
      localStorage.setItem('token', result.data.token)
      localStorage.setItem('userid',result.data.id)
    } catch (error:any) {
      if (axios.isAxiosError(error)) {
      // Axios error, handle the response data
      const errorValue: ErrorValues = {
        isError: true,
        errorMessage: error.response?.data ?? 'Unknown error',
      };
      handleErrors(errorValue);
      console.log(errorValue.errorMessage);
    } else {
      
      console.error('Error:', error.message);
    }
    }
  };
 

  const handleErrors = (data: ErrorValues) => {
    if (data.isError === true) {
      setErrorValues((prevValues) => ({
        ...prevValues,
        isError: true,
        errorMessage:data.errorMessage
      }));
    }
  };

  const loginHandlers: LoginHandlers = {
    handleUsername,
    handlePassword,
    handleSubmit,
    handleErrors,
    loginFacebook
  };

  return [loginValues, loginHandlers,errorValues];
}

export default useLogin;
