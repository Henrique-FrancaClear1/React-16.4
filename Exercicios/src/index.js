import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//------------------------------------------
//import Saudacao from './componentes/Saudacao'
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
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />    
            <Filho nome="Paulo" />    
            <Filho nome="Carla" />    
        </Pai>
    </div>
    , document.getElementById('root')) // root vem de index.html da pasta public



