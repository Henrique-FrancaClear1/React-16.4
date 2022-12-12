import React, { Component } from "react";

// exportando uma classe com uma extenção de um componente do react
export default class Saudacao extends Component {
    //atribuição para iniciar o estado (state)
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }


    constructor(props) {
        super(props)

        // bind faz com que o this aponte para ele mesmo oupara o componente atual
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)

        // para serinicado dentro do construtor precisa ter o this na frente
        // this.state = {
        //    tipo: this.props.tipo,
        //    nome: this.props.nome
    }


    //função para setar o valor no input (tipo)
    setTipo(e) {
        //função para alterar o estado
        this.setState({ tipo: e.target.value })
    }
    //função para setar o valor no input (nome)
    setNome(e) {
        this.setState({ nome: e.target.value })
    }



    // funcção responsavel por renderizar o componente 
    render() {
        const { tipo, nome } = this.state // referenciando os atributos
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                {/* recebendo o valor referenciado */}
                <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo} />

                {/* recebendo o valor referenciado */}
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
                {/* mais uma maneira de referenciar o this para o componente */}
            </div>
        )
    }

}




