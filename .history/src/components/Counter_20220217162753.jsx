import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={add}>
        Increment
      </button>
    </div>
  )
}

//"let count = 0" = somente assim ao clicar no batão não surje efeito vamos add assim:
//a variavel "count" vamos apagar e add, "counter e setCounter" -> pq?: como o elemento retorna um array, temos que passar a variavel que recebe [0] primeiro array e a outra [1] o proximo array ficando assim -> "let [counter, setCounter] = useState(0)"
//Trocamos para cosnt pq o vamos não vai mudar e sim passar para outra variavel -> "const [counter, setCounter] = useState(0)"
//setCounter - que dá a possibilidade de alterar o valor
//Dentro da função irá ficar assim "setCounter(counter + 1)" - passando o setCounter recenbendo couter + 1
