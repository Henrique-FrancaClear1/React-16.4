import React, { Component } from "react";

// exportando uma classe com uma extenção de um componente do react
export default class Saudacao extends Component {
    //atribuição para iniciar o estado (state)
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
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
                    onChange={e => this.setTipo(e)} />

                {/* recebendo o valor referenciado */}
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
            </div>
        )
    }

}




