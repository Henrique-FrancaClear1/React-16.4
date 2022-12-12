import React from "react"
//exportando uma função 
export function childrenWithProps(props) {
    //recebendo multiplos elementos
    return React.Children.map(props.children, child => {
        //pegando as propriedades do Pai e passando pro Filho
        return React.cloneElement(child, { ...props, ...child.props })

    })

}