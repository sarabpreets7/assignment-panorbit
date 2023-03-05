import {
  Routes,Route } from "react-router-dom";
  import "./App.css";
import Landingpage from './pages/Landingpage';
import Profilepage from "./pages/Profilepage";
import Sidebar from "./components/Sidebar";
import Postpage from "./pages/Postpage";
import Gallerypage from "./pages/Gallerypage";
import Todopage from "./pages/Todopage";
import { SmoothProvider } from 'react-smooth-scrolling'

function App() {
  return (
    <SmoothProvider>
      <div className="App">
        <Routes>
            <Route path="/" element={<Landingpage></Landingpage>} exact />
            <Route path="/profile" element={<div className="flexbox"><Sidebar/> <Profilepage></Profilepage></div>} exact ></Route>
            <Route path="/post" element={<div className="flexbox"><Sidebar/> <Postpage></Postpage></div>} exact ></Route>
            <Route path="/gallery" element={<div className="flexbox"><Sidebar/> <Gallerypage></Gallerypage></div>} exact ></Route>
            <Route path="/todo" element={<div className="flexbox"><Sidebar/> <Todopage></Todopage></div>} exact ></Route>
          </Routes>
      
      </div>
    </SmoothProvider>
  );
}

export default App;
