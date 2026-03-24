import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  let [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token"),
  );

  const value = { token, setToken, logOut };
  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
