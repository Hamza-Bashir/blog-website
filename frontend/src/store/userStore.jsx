import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || null
  });

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
    }
    if (user.user) {
      localStorage.setItem("user", JSON.stringify(user.user)); // ✅ small 'u'
    }
  }, [user]);

  const login = (token, userData) => {
    setUser({ token, user: userData }); // ✅ correct key name
  };

  const logout = () => {
    setUser({ token: "", user: null }); // ✅ correct key name
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ small 'u'
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
