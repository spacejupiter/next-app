'use client'
import React, { useEffect, useState } from 'react';
import Profile from './lib/profile';
import Info from './lib/info';
import requireAuth from '../../components/requireauth';
import axios from 'axios';
import { useParams } from 'next/navigation';

function UserPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dataFetched, setDataFetched] = useState(false);
  const params = useParams();
  
  useEffect(() => {
    try {
      
      const id = localStorage.getItem('userid');
      const token = localStorage.getItem('token');

      axios.get('http://localhost:4700/api/user/' + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        const { email, username } = res.data[0];
        setUsername(username);
        setEmail(email);
        setDataFetched(true);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  const getUrl = () => {
    const loginType = params.loginType;
    if (loginType === 'local') {
      return 'http://localhost:4700/api/user/'
    }
    
  }
  return (
    <div className='overflow-hidden font-popins px-4 pb-4 bg-gray-100 flex flex-col items-center justify-center h-screen bg-white flex font-bold flex-col space-y-4'>
      {dataFetched && <Profile username={username} email={email} />}
      <Info />
    </div>
  );
}

const ProtectedUser = requireAuth(UserPage);

export default ProtectedUser;
