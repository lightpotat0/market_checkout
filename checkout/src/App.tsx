import "./App.css";

function App() {

  return (
    <div className="container">
      <img className="market" src="../public/app-icon.png" />

      <div className="row">
        <a href="./html_js/contas.html">
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
