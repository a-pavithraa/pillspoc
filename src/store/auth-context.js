import React, { useState, useEffect,useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const AuthContext = React.createContext({
  isLoggedIn: false,
  isInvalidCredential:false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});




export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const history = useHistory();
 
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsInvalidCredential(false);
    localStorage.removeItem("jwtToken");
   // history.replace("/login");
  };
 
  const loginHandler = (userName,password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    setIsInvalidCredential(false);
    
   
   
    console.log('login handler');
   
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isInvalidCredential: isInvalidCredential,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;