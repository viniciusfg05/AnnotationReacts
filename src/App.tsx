import './styles/global.scss'
import './styles/profile.scss'

import { RepositoryList } from './components/RepositoryList'
import { Profile } from './components/Profile'
import { Counter } from './components/Counter'

export function App() {
  return (
    <>
      <Profile />
      <RepositoryList />
      {/* <Counter /> */}
    </>
  )
}

//Quando uma return mais de um componet, precisamos add um element pai, colocariamos uma div, mas futuramente isso pode atrapalhar no css e outro
//Usamos uma tag sem nada que se chama fraguimentos <> </> e não produz nada visual no html

//Por padrão p react não fica monitorando se algum estado está sendo alterado e rederizar novamente em tela
//Estado: variaveis que ele vai monitorarar
//Para isso vamos importar um elemento do react chamado useState "import { useState } from 'react'"
