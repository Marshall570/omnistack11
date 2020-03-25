import React, { useState } from 'react';
// HTML escrito pelo JS => JSX (JavaScript+XML)

import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  // USESTATE retorna um array [valor, atualização]

  function increment() {
    // count += 1       =>  Alterar valor SEM USAR ESTADO
    setCount(count + 1)   // Alterar valor USANDO Estado
  }

  return (
    <div>
      <Header> Contador: {count} </Header>
      <button onClick={increment}> INCREMENTAR </button>
    </div>
  );
}

export default App;
