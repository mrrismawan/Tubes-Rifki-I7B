import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddAlat from "./components/AddAlat";
import EditAlat from "./components/EditAlat";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<><Navbar/><Dashboard/></>} />
        <Route path="/adddata" element={<AddAlat/>} />
        <Route path="/dashboard/editdata/:id" element={<EditAlat/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
