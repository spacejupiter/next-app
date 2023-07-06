import React from 'react';

interface ErrorMessageProps {
  error: {
    errorMessage: string;
    isError: any;
  };
}

const Errormessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const { errorMessage, isError } = error;
  if (isError===null) {
    return <></>
  }
  if (isError === true) {
    return <div className='bg-red-600 text-white border border-[0.1px] border-black py-3 px-12' >
          <p className='text-sm'>{errorMessage}</p>
        </div>
  } else {
    return <div className='bg-green-600 text-white border border-[0.1px] border-black py-3 px-12' >
          <p className='text-sm'>{errorMessage}</p>
        </div>
  }
 
};

export default Errormessage;
