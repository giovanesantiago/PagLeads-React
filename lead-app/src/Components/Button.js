

const Button = (props) => {
    return (
        <button onClick={props.funcao} type="submit" className="botao btn btn-primary">Enviar</button>
    )
}

export default Button