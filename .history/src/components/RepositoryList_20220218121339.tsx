import { useState, useEffect } from 'react'
import { RepositoryItens } from './RepositoryItens'
import '../styles/repositories.scss'

interface Repository {
  name: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/viniciusfg05/repos')
    .then(response => response.json()) //quando a api retorna uma resposta, converter para .json
    .then(data => setRepositories(data)) //quando terminar de ser convertida eu vou ter os dados do meu repositório
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItens key={repository.name} repository={repository} />
        })} //para cada repository ele retorna um item
      </ul>
    </section>
  )
}

//erro: const repositories: never[] - temos que evitar vamos criar as tipagem 
//Sem o props 
