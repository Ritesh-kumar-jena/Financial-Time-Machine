import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAuth,setAuth]=useState(false)

  useEffect(() => {
    if (token) {
      axios.get("https://financial-time-machine-rer6.onrender.com/users/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
    }
  }, [token]);

  const login = async (email, pass) => {
    try {
      const res = await axios.post("https://financial-time-machine-rer6.onrender.com/users/login", { email, pass });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setAuth(!isAuth)
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response.data };
    }
  };

  const logout = async () => {
    await axios.get("https://financial-time-machine-rer6.onrender.com/users/logout", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token");
    setToken("");
    setAuth(!isAuth)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token ,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);