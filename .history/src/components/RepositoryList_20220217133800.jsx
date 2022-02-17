import { RepositoryItens } from './RepositoryItens'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItens repository="unform2" />
        <RepositoryItens />
        <RepositoryItens />
        <RepositoryItens />
      </ul>
    </section>
  )
}

//Enviar uma informação do componente pai assim nosso componente pai pode enviar
