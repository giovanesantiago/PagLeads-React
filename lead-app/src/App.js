import Header from "./Lego/Header";
import "../src/Estilo/css/style.css"
import "../src/Estilo/bootstrap/css/bootstrap.min.css"
import Form from "./Lego/Fomulario";

function App() {
  return (
    <div className="tudo">
      <Header />
      <main className="cadastro" >
        <Form />
      </main>
    </div>
    
  );
}

export default App;
