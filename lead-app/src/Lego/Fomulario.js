import React from "react"
import emailjs from "emailjs-com"
import Button from "../Components/Button";


const labelStyleGrande = {
    width: '100%',
    marginBottom: '0px'
}
const labelStyle = {
    marginBottom: '0px'
}
const inputStyle = {
    margin: '20px',
    with: '100%',
    float: 'right'
}
   


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            telefone: '',
            email: '',
            moto: '',
            pag: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleOnChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({[name]: value})
    }
    
    

    handleSubmit(e) {
        /* const { nome, telefone, email, moto, pag } = this.state
        console.log( 'nome: ' + nome + ' telefone: ' + telefone + ' email: ' + email + ' moto: ' + moto + ' pag: ' + pag) */

        e.preventDefault()
        emailjs.sendForm('gmailMessage', 'template_hnhhved', e.target, 'user_Ed3D1EkBH2vEa3111vafs')
            .then((result) => {
                console.log(result.text);
                alert('Enviado !!! ')
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style={labelStyleGrande} className="form-label">
                    Nome
                    <input style={inputStyle}  name='nome' type="text" value={this.state.nome} onChange={this.handleOnChange} className="form-control" id="exampleInputPassword1" ></input>
                </label>
                <label style={labelStyleGrande} className="form-label">
                    Telefone
                    <strong> Ex: (71)991609668</strong>
                    <input style={inputStyle} name="telefone" type='number' value={this.state.telefone} onChange={this.handleOnChange}/>
                </label>
                <label style={labelStyleGrande} htmlFor="exampleInputEmail1">
                    Email address
                    <input style={inputStyle} name="email" type="email" value={this.state.email} onChange={this.handleOnChange} className="form-control"></input>
                </label>
                <label style={labelStyleGrande}>
                    Motocicleta :
                    <select style={inputStyle}  id="moto" name="moto" value={this.state.moto} onChange={this.handleOnChange}>
                        <option value="selected" > Motocicleta </option>
                        <option value="Meteor 350">Meteor 350</option>
                        <option value="Himalayan 411">Himalayan 411</option>
                        <option value="Interceptor 650 twin">Interceptor 650 twin</option>
                        <option value="Continetal 650 twin">Continetal 650 twin</option>
                    </select>
                </label>
                <label style={labelStyleGrande}>
                    Forma De pagamento :
                    <select style={inputStyle}  id="pag" name="pag" value={this.state.pag} onChange={this.handleOnChange}>
                        <option value="selected" > Forma De pagamento </option>
                        <option value="A vista">A vista</option>
                        <option value="Cartão">Cartão</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                </label>
                <Button />
                <br />
                <br />
                <h1 className="grande">Ou acesse alguma das nossas redes socias :</h1>
            </form>

            
        )
    }

}


export default Form
