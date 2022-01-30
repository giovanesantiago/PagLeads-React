import React from "react"
import Button from "../Components/Button";
import Input from "../Components/Input";
import Label from "../Components/Label";
import Option from "../Components/Option";


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            telefone: undefined,
            email: '',
            moto: '',
            pag: ''
        };

        this.alterar = this.alterar.bind(this)
        this.enviar = this.enviar.bind(this)
    }

    alterar(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name
        this.setState({ [name]: event.target.value })
    }

    enviar(event) {
        alert('O nome enviado : ' + this.state.nome + '\n O telefone enviado : ' + this.state.telefone + '\n O email enviado foi : ' + this.state.email + '\n O moto enviado foi : ' + this.state.moto + '\n O Pagamento enviado foi : ' + this.state.pag)
        
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.enviar}>
                <div className="mb-3">
                    <Label  txt="Nome" />
                    <Input name="nome" type='text' value={this.state.nome} enviar={this.alterar} id2="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <Label for="exampleInputPassword1"  txt="Telefone " /> 
                    <strong> Ex: (71)991609668</strong>
                    <Input  name="telefone" type='number' value={this.state.telefone} enviar={this.alterar}id2="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Label for="exampleInputEmail1" txt="Email address" />
                    <Input name="email" type='email' value={this.state.email} enviar={this.alterar} id2="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <select id="moto" name="moto" value={this.state.moto} onChange={this.alterar} class="form-select form-select-sm" aria-label=".form-select-sm example" >
                    <Option selected txt="Motocicleta" />
                    <Option n='Meteor 350' txt="Meteor 350" />
                    <Option n='Himalayan 411' txt="Himalayan 411"/>
                    <Option n='Interceptor 650 twin' txt="Interceptor 650 twin"/>
                    <Option n='Continetal 650 twin' txt="Continetal 650 twin"/>
                    <option value="4"></option>
                </select>
                <select id="pag" name="pag" value={this.state.pag} onChange={this.alterar} class="form-select form-select-sm" aria-label=".form-select-sm example" >
                    <Option selected txt="Forma de pagamento" />
                    <Option n='A vista' txt="A vista" />
                    <Option n='Cartão' txt="Cartão"/>
                    <Option n='Financiamento' txt="Financiamento"/>
                    <option value="3"></option>
                </select>
                <Button />
            </form>
        )
    }
}

export default Form