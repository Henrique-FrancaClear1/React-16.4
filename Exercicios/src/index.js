import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'

//------------------------------------------
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//ultra maneira de importar mais de um componente
//import Multiplos from './componentes/Multiplos'
//import { Boanoite, Boatarde } from './componentes/Multiplos'
//------------------------------------------


//função do react dom para renderisar elementos na pagina
ReactDOM.render(
    //para ter masi de um elemento pracisa de uma tag para envolver como o <div>
    <div>
        <Saudacao tipo="Bom dia!" nome="João"/>
    </div>
    , document.getElementById('root')) // root vem de index.html da pasta public



