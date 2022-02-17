import './styles/global.scss'
import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter'

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}

//Quando uma return mais de um componet, precisamos add um element pai, colocariamos uma div, mas futuramente isso pode atrapalhar no css e outro
//Usamos uma tag sem nada que se chama fraguimentos
