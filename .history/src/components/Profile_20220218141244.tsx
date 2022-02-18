interface RepositoryItensProps { //repito o nome do componente com props
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function Profile() {
  return (
    <div>
      <div>
        <div>Vinicius Ferreira</div>
        <li>
          <ul>Estudando HTML, CSS e JAVASCRIPT</ul>
          <ul>Estudando HTML, CSS e JAVASCRIPT</ul>
          <ul>Estudando HTML, CSS e JAVASCRIPT</ul>
        </li>
      </div>
    </div>
    
  )
}

