import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Container/SideBar";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<SideBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
