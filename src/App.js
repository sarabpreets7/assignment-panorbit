import {
  Routes,Route } from "react-router-dom";
import "./App.css";
import Landingpage from './pages/Landingpage';
import Profilepage from "./pages/Profilepage";
import Sidebar from "./components/Sidebar";
import Postpage from "./pages/Postpage";
import Gallerypage from "./pages/Gallerypage";
import Todopage from "./pages/Todopage";
import Chatbox from "./components/Chatbox";
import { UserState } from "./context/provider";
import { useDetectClickOutside } from 'react-detect-click-outside';

function App() {
  const {user, showChatBox,setChatBox} = UserState();

  //detects if user clicks anywhere but chatbox,if so it closes the chatbox
  const ref = useDetectClickOutside({ onTriggered: ((e)=>{
    
      setChatBox(false)
   
  } )});

  return (
    
      <div className="App">
        {/* show landing page only if user isn't logged in,else show all other pages */}
        {!user?
         <Routes >
           <Route path="/" element={<Landingpage></Landingpage>}  />
         </Routes>
        :
        <div className="flexbox">
          <Sidebar/>
          <Routes >
            <Route path="/profile" element={<Profilepage/>}   />
            <Route path="/post" element={<Postpage/>} exact ></Route>
            <Route path="/gallery" element={<Gallerypage/>} exact ></Route>
            <Route path="/todo" element={<Todopage/>} exact ></Route>
            <Route path='*' element={<div className="page_not_found"><h2>Page not found</h2></div>}/>
          </Routes>
          <div ref={ref} >
            <Chatbox showChatBox={showChatBox} setChatBox={setChatBox} />
          </div>
        </div>
        
        }

      </div>
    
  );
}

export default App;
