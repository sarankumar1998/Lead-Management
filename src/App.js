import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './Container/SideBar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/*" element={<SideBar />}/>
          <Route path="dashboard*" element={<Dashboard />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
