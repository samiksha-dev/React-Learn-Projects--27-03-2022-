import logo from "./logo.svg";
import "./App.css";
import { Route, Routess } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
