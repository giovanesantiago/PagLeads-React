

const Label = (props) => {
    return (
        <label htmlFor={props.for} className="form-label">{props.txt}</label>
    )
}

export default Label