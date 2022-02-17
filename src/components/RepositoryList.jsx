import { RepositoryItens } from './RepositoryItens'

const repository = {
  name: 'JobsCalc',
  description: 'Calcula o custo por hora',
  link: 'https://github.com/viniciusfg05/JobsCalc'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItens repository={repository} />
        <RepositoryItens repository={repository} />
        <RepositoryItens repository={repository} />
        <RepositoryItens repository={repository} />
      </ul>
    </section>
  )
}

//Enviar uma informação do componente pai assim nosso componente pai pode enviar

//Para acessar todas as propriedade que um componente recebe atraves dos agumentop da função dentro de props:
