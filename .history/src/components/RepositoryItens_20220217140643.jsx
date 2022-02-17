export function RepositoryItens(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Defalt'}</strong>
      <p>{props.repository.description}</p>

      <a href="#">{props.repository.link}</a>
    </li>
  )
}
