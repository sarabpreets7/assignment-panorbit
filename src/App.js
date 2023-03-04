import {
  Routes,Route } from "react-router-dom";
  import "./App.css";
import Landingpage from './pages/Landingpage';
import Profilepage from "./pages/Profilepage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Landingpage></Landingpage>} exact />
          <Route path="/profile" element={<div className="flexbox"><Sidebar/> <Profilepage></Profilepage></div>} exact >

          </Route>
          
        </Routes>
     
    </div>
  );
}

export default App;
