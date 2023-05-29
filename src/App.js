import { Routes, Route } from "react-router-dom";

import "./styles.css";
import { Header } from "./Components/Header";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { Mail } from "./pages/Mail";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <button>Hamburger Icon</button>
        <span className="MainTitle">Gmail</span>
      </div>

      <div className="ParentContainer">
        <Header />
        <div className="MailContainer">
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/mail/:id" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
