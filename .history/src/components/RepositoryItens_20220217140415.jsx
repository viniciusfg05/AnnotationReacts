export function RepositoryItens(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Defalt'}</strong>
      <p>Forms ins React</p>

      <a href="#">Acessar repositorio</a>
    </li>
  )
}
