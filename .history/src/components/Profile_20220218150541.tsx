
interface ProfileProps { 
  profile: {
    avatar_url?: string;
    bio: string;
    login: string;
  }
}

export function Profile(props: ProfileProps) {
  return (
    <div>
      <div className="Content">
        <div className="perfil">
          <img src={ props.profile.avatar_url } alt="Foto de perfil" />

          <p>Vinicius Ferreira</p>
        </div>
        
        
        <div className="bio">
          <li></li>
        </div>
      </div>
    </div>
    
  )
}

