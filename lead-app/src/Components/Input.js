

const Input = (props) => {
    return (
        <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.enviar} className="form-control" id={props.id2}></input>
    )
}

export default Input