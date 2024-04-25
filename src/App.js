import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthStore from "./store/auth-store";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("abc");
  useEffect(() => {
    // console.log("effect");
    const x = localStorage.getItem("isLoggedIn");
    if (x === "abc") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("123");
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "abc");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthStore.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </AuthStore.Provider>
  );
}

export default App;
