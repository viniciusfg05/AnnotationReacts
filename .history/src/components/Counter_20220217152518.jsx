import { useState } from 'react'

export function Counter() {
  let count = 0

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

//Para isso vamos importar um elemento do react chamado useState
