import { RepositoryItens } from './RepositoryItens'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItens repository="unform2666" />
        <RepositoryItens />
        <RepositoryItens />
        <RepositoryItens />
      </ul>
    </section>
  )
}

//Enviar uma informação do componente pai assim nosso componente pai pode enviar

//Para acessar todas as propriedade que um componente recebe atraves dos agumentop da função dentro de props:
