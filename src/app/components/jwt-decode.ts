import jwt_decode from 'jwt-decode'

const isTokenValid = () => {
  // Get the JWT token from the HTTP-only cookie or any other storage mechanism
  const token = localStorage.getItem('token') // Retrieve the JWT token

  if (!token) {
    return false // Token is not present, consider it invalid
  }

  try {
    // Decode the JWT token to extract the expiration time
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

export default isTokenValid
