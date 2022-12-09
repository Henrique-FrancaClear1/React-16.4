import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//ultra maneira de importar mais de um componente
import Multiplos from './componentes/Multiplos'
//import { Boanoite, Boatarde } from './componentes/Multiplos'

//função do react dom para renderisar elementos na pagina
ReactDOM.render(
    //para ter masi de um elemento pracisa de uma tag para envolver como o <div>
    <div>
        <Multiplos.Boatarde nome="Henrique" />
        <Multiplos.Boanoite nome='Lucas' />
    </div>
    , document.getElementById('root')) // root vem de index.html da pasta public



