import "./App.css";
import { Routes, Route } from "react-router-dom";
import InfoList from "./InfoList/InfoList";
import Editinfo from "./InfoList/InfoList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InfoList />} />
        <Route path="/edit/:id" element={<Editinfo />} />
        <Route path="/create" />
      </Routes>
    </div>
  );
}

export default App;