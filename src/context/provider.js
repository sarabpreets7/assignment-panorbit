import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState();
  const [activePage,setPage] = useState("profile");
  const [userList,setUserList] = useState([])
  

  const navigate = useNavigate();

  useEffect(() => {

    // if(!user){
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(!userInfo){
        navigate("/");
        return;
      }
      setUser(userInfo);
    // }
  
    // if(!userList){
      let usersList = JSON.parse(localStorage.getItem("usersList"));
      if(!usersList){
        navigate("/");
        return;
      }
      setUserList(usersList)
    // }
    
    // if (!user || !userList) navigate("/");
    
  }, [navigate]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        activePage,
        setPage,
        userList,
        setUserList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default UserProvider;