interface RepositoryItensProps { //repito o nome do componente com props
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItens(props: RepositoryItensProps) {
  return (
    <div>
      <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>

      <div className="divide"></div>
    </li>
    </div>
    
  )
}


//
//