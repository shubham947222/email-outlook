import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Inbox from "./Pages/Inbox.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />} index />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
