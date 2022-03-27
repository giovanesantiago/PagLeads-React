import Image from "../Components/Image"
import logo from "../Estilo/imagens/logo.png"

const h1Style =  {
    marginTop: '20px',
    fontWeight: '900',
    fontSize: '1.7em'
}

const Header = () => {
    return (
        <header className="topo">
            <Image src={logo} alt="logo royal enfield" w="200px"/>
            <h1 style={h1Style}>Preencha os dados e click em enviar :</h1>
            <br/>
        </header>
        
        
    )
}

export default Header