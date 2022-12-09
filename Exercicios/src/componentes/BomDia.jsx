import React from "react";

//props é quando passa a propriedade 
// para ter mais de um elememto é necessario uma teg para serem envolvidos como o <div>
export default props =>
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve</h2>
    </div>



// para usar comoum array tem que definir uma key 
//(pode ter o nome que vc quiser, porem não pode ter duas com o mesmo nome)
//export default props =>[
    //    <h1 key= 'h1'>Bom dia {props.nome}!</h1>
      //  <h2 key= 'h2'>Até Breve</h2>
//  ]

// outra opção para envolver em uma tag 
//export default props =>
  //  <React.Fragment>
    //    <h1>Bom dia {props.nome}!</h1>
      //  <h2>Até Breve</h2>
    //</React.Fragment>

