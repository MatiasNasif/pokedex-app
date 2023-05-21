import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const ValueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ValueContext}>{children}</AuthContext.Provider>
  );
};
