import React from "react";
import {childrenWithProps} from "../utils/Utils"
//import Filho from "./Filho";



export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1> {/*Nome do Pai*/}
        <h2>Filhos</h2>
        <ul>

            {childrenWithProps(props)}

        </ul>
    </div>


{/*<Filho nome="Pedro" sobrenome={props.sobrenome} />
<Filho {...props} />{/*Operador Spread,permite passar todas as propriedades para outro componente
<Filho {...props} nome="Carla" /> pegando todas as propriedades de Pai porem definido pelo menos uma propriedade*/}

