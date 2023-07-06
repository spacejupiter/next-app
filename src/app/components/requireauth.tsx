'use client'
;
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const isTokenValid = () => {

  const token = localStorage.getItem('token') 

  if (!token) {
    return false 
  }

  try {

    const decodedToken: any = jwt_decode(token)
    const currentTime = Date.now() / 1000

    // Check if the token is expired
    if (decodedToken.exp < currentTime) {
      return false // Token has expired, consider it invalid
    }

    return true // Token is valid
  } catch (error) {
    return false // Error occurred while decoding the token, consider it invalid
  }
}

const requireAuth = (WrappedComponent: React.ComponentType<any>) => {
  const HOCComponent: React.FC<any> = (props) => {
    const router = useRouter();

    // Check if user is authenticated
    const isAuthenticated: boolean = isTokenValid()

    useEffect(() => {
      // If user is not authenticated, redirect to login page
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, []);

    // Render the wrapped component if user is authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return HOCComponent;
};

export default requireAuth;
