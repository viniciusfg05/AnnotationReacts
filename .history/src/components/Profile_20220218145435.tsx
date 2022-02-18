
interface ProfileProps { 
  repository: {
    avatar_url: string;
    bio: string;
    login: string;
  }
}

export function Profile(props: ProfileProps) {
  return (
    <div>
      <div className="Content">
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/68232658?v=4" alt="Foto de perfil" />

          <p>Vinicius Ferreira</p>
        </div>
        
        
        <div className="bio">
          <li>Estudando HTML, CSS e JAVASCRIPT</li>
        </div>
      </div>
    </div>
    
  )
}

