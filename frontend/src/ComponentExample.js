import React from 'react'           // NÃO ESQUECER DE IMPORTAR REACT PARA UTILIZAR JSX

// Crie componentes para partes do sistema que serão repetidas várias vezes
// COMPONENTES PRECISAM INICIAR COM LETRA MAIÚSCULA
// props exigem ser colocadas em chaves pois são JS em HTML

export default function Header({ children }) {
    return (
        <header>            
            <h1>{children}</h1>
        </header>
    )
}

