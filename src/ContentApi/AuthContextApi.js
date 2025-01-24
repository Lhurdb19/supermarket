import { createContext, useCallback, useEffect, useState } from "react";




export const AuthContext = createContext({
  isLoggedIn: false,
  Login: () => {},
  Logout: () => {},
  Register: () => {},
  currentUser: null,
});



export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Function to register a new user
  const Register = useCallback((username, password) => {
    const firstName = username.split("@")[0]; // Example: derive from username
    let users;
    try {
        users = JSON.parse(localStorage.getItem("users")) || [];
    } catch (error) {
        users = [];
    }
    const userExists = users.some((user) => user.username === username);

    
    if (userExists) {
      alert("User already exists. Please log in.");
      return false;
    }

    const updatedUsers = [
      ...users,
      { firstName, username, password },
    ];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registration successful. You can now log in.");
    return true;
  }, []);

  // Function to log in the user
  const Login = useCallback((username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    } else {
      alert("Invalid username or password.");
      return false;
    }
  }, []);

  // Function to log out the user
  const Logout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  }, []);

  // Load login status and current user from localStorage on component mount
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedLoginStatus === "true" && storedCurrentUser) {
      setIsLoggedIn(true);
      setCurrentUser(storedCurrentUser);
    }
  }, []);

  const value = {
    isLoggedIn,
    currentUser,
    Login,
    Logout,
    Register,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
