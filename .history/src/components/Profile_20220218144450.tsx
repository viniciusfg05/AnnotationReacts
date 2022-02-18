
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
      <div className="Content">
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/68232658?v=4" alt="Foto de perfil" />

          <p>Vinicius Ferreira</p>
        </div>
        

        <li>
          <ul>Estudando HTML, CSS e JAVASCRIPT</ul>
        </li>
      </div>
    </div>
    
  )
}
