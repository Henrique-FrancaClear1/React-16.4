import React from "react";

// qunado se exporta com algum nome não se usa o dafault (anonimo)
const Boatarde = props => <h1>Boa tarde {props.nome}!</h1>

const Boanoite = prosp => <h1> Boa noite {prosp.nome}!</h1>


// outra maneira de exportar 
export {Boanoite, Boatarde}

// outra maneira de exportar 
export default {Boanoite, Boatarde}



