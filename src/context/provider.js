import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState();
  const [activePage,setPage] = useState("");
  const [userList,setUserList] = useState([]);
  const [showChatBox,setChatBox] = useState(false);
  

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(!userInfo){
        navigate("/");
        return;
      }
      setUser(userInfo);
   
      let usersList = JSON.parse(localStorage.getItem("usersList"));
      if(!usersList){
        navigate("/");
        return;
      }
      setUserList(usersList)
    
      //if logged in user tries to go back,will be redirected to profile page.
      if(location.pathname == "/"){
        navigate("/profile")
      }
      //helps user load the same page he/she was on before hard refresh.
      else{
        setPage(location.pathname.substring(1))
      }
    
    
  }, [navigate]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        activePage,
        setPage,
        userList,
        setUserList,
        showChatBox,
        setChatBox
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