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
        <a href="./html/contas.html">
          <img className="pessoas" src="../public/33308.png" alt="pessoas" />
          <h1>Pessoas</h1>
        </a>
        <a>
          <img className="estoque" src="../public/4295.png" alt="estoque" />
          <h1>Estoque</h1>
        </a>
      </div>
    </div>
  );
}

export default App;
