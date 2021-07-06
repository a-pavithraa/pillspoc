import React, { useState, useEffect,useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isInvalidCredential:false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});




export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const history =useHistory();

 
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
    history.push("/login");
  };
  const authenticateUser =  (userName,password)=>{
    var authenticationData = {
      Username : userName,
      Password : password,
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  var poolData = { UserPoolId : 'us-east-1_DUfDYLnmA',
      ClientId : '7sopkguq2mmi4vf7dhnet51kjn'
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
      Username : userName,
      Pool : userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  
   cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          var accessToken = result.getAccessToken().getJwtToken();
          console.log('success called');
          var idToken = result.idToken.jwtToken;
          localStorage.setItem("jwtToken",idToken);
          setIsLoggedIn(true);
          setIsInvalidCredential(false);
          /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        
          
      },
  
      onFailure: function(err) {
        console.log('onfailure called');
        setIsInvalidCredential(true);
        setIsLoggedIn(false);
      },
  
  });
  }
  const loginHandler = (userName,password) => {
    localStorage.setItem('isLoggedIn', '1');
    authenticateUser(userName,password);
   
   
   
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