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
      <div>
        <div>Vinicius Ferreira</div>

        <li>
          <ul>Estudando HTML, CSS e JAVASCRIPT</ul>
        </li>
      </div>


      <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>

      </li>

      <div className="divide"></div>
    </div>
    
  )
}


//
//