// CSS :
import "../src/Estilo/css/style.css";
import "../src/Estilo/bootstrap/css/bootstrap.min.css";

// Legos :
import Header from "./Lego/Header";
import Form from "./Lego/Fomulario";
import Footer from "./Lego/Footer";
import Contato from "./Lego/Contato";


function App() {
  return (
    <div className="tudo">
      <Header />
      <main className="cadastro" >
        <Form />
      </main>
      
      <main className="contato">
        <Contato />
      </main>
      <br/>
      <Footer />
    </div>
    
  );
}

export default App;
