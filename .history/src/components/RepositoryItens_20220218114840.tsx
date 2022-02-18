interface RepositoryItensProps { //repito o nome do componente com props
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItens(props: RepositoryItensProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  )
}


//Erro ao passar de jsx para tsx, no props:"O parâmetro 'props' implicitamente tem um tipo 'any'" - quer dizer que de forma padrão ele recebeu o tipagem para 'any' (qualque tipo), temos que passar uma tipagem
//Informar oq tem dentro do props