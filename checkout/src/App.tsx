import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <img className="market" src="../public/app-icon.png" />

      <div className="row">
        <a>
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a>
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
