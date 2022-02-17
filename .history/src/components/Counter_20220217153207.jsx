import { useState } from 'react'

export function Counter() {
  let [counter, setCounter] = useState(0)

  function increment() {
    counter += 1
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
//a variavel "count" vamos apagar e add, "counter e setCounter" -> pq?: como o elemento retorna um array, temos que passar a variavel que recebe [0] primeiro array e a outra [1] o proximo array
//
