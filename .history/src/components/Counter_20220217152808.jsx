import { useState } from 'react'

export function Counter() {
  let count = useState(0;)

  function increment() {
    console.log('increment')
  }

  return (
    <div>
      <h2>0</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

//"let count = 0" = somente assim ao clicar no batão não surje efeito vamos add assim:
//