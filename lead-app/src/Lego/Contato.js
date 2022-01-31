import Image from "../Components/Image"
import linked from "../Estilo/imagens/redes/link.png"
import git from "../Estilo/imagens/redes/git.png"
import insta from "../Estilo/imagens/redes/insta.png"
import what from "../Estilo/imagens/redes/logo-whatsapp.png"

const Contato = () => {
    return(
        <div>
            <div className="item">
                <a target="_blank" href="https://wa.me/message/XH3VVTUIW5ELE1">
                <Image src={what} w="150px"/> 
                </a>
            </div>
            <div className="redes">
                    <a target="_blank" href="https://www.linkedin.com/in/giovane-santiago-473863212/">
                        <Image src={linked} />
                    </a>
                    <a target="_blank" href="https://github.com/giovanesantiago">
                        <Image src={git} />  
                    </a>
                    <a target="_blank" href="https://www.instagram.com/giovaneroyal/">
                        <Image src={insta} w="20px"/>
                    </a>
            </div>
        </div>
    )
}

export default Contato