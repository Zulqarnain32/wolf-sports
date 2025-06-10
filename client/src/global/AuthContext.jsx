import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      axios
        .get("https://generate-test-backend.vercel.app/login/success", {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data?.user) {
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }
        })
        .catch((err) => {
          // If unauthorized (401), just stay logged out without throwing
          if (err.response?.status === 401) {
            console.log("User not authenticated yet.");
          } else {
            console.error("Google Auth Fetch Error:", err);
          }
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};