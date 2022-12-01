import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />}>
            <p>Thisos</p>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
