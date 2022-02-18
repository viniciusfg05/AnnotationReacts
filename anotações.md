###Uando useEffect: serve basicamente para disparar um função quando algo acontecer.
###Uando useEffect: recebe dois parametros: (() => {}, [])

- entre {} : qual função eu quero executar
- entre []: Quando eu quero executart essa função
- se entre [] estiver vazio a função irá executar uma unica vez, assim que o componete for exibido em tela
  OBS: cuidado ao deixar de colocar o segundo parametro pq o userEffect entrar em loop
  OBS: Ele entrará em loop tb se atualizar uma variavel dentro do user effect com a msm dependecia da execução do effect [],
  ex:
  useEffect(() => {
  setRepositories(...)
  }, [repositories])
  Ficá alterando ela msm sempre em loop

Toda vez que vou utilizar uma informação que está em um vetor/array, que para cada array, quero mostrar uma coisa diferente
OBS: se eu quisse executar alguma função eu usava o forEach(), mas ele não retorna nada. Então usaremos o map(), pq ele percorre cada elemento e retorna alguma coisa Ex.

   <ul>
      {repositories.map(repository => {
        return <RepositoryItens repository{repository} />
      })} //para cada repository ele retorna umitem
    </ul>

##Erro no console: react-jsx-runtime.development.js?bb19:117 Warning: Each child in a list should have a unique "key"
#OBS: Toda vez que usamos o map() no react temos que add uma propriedade que o propro React tem chmada key(), fará com q cada repositorio apresente um id unico, usaremos o nome Ex.

return <RepositoryItens key={repository. name} repository={repository} />

/////
