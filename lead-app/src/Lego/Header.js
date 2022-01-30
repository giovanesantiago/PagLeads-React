import Image from "../Components/Image"
import logo from "../Estilo/imagens/logo.png"

const Header = () => {
    return (
        <header className="topo">
              <Image src={logo} alt="logo royal enfield" width="200px"/>
        </header>
    )
}

export default Header