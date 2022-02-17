import { RepositoryItens } from './RepositoryItens'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItens />
        <RepositoryItens />
        <RepositoryItens />
        <RepositoryItens />
      </ul>
    </section>
  )
}
