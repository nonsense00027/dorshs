import React, { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";

const userCookie = Cookie.getJSON("user") ? Cookie.getJSON("user") : null;

//Prepares the data layer
export const UserContext = createContext();

//Wrap our app and provide the Data Layer
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userCookie);

  const userLogin = (user) => {
    setUser(user);
    Cookie.set("user", JSON.stringify(user));
    console.log("AFTER SETTING USER", user);
  };

  const userLogout = () => {
    setUser(null);
    Cookie.remove("user");
    window.location.reload();
  };

  // useEffect(() => {
  //   console.log("USER", user);
  // }, [user]);

  const payload = { user, userLogin, userLogout };

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
