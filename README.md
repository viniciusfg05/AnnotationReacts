# AnnotationReacts

Anotações do estudo de React JS

### Configurando Babel

- Converte o código que não é compatível com alguns navegadores para os navegadores mais mordemos

### Configurando o Webpack

- Estipula uma serie de configurações chamada loaders, para ensina para nossa aplicação como ela deve tratar da arquivo que for  for importando no React (ex: .js, sass, png, jpg, svg etc) e converter para arquivos  entendíveis pelo navegador

### Estrutura do React JS

- Dentro da do index.html, devemos criar uma div root

### Estrutura do React JS

- Dentro da do index.html, devemos criar uma div root

### Servindo HTML estático

- No index.html, precisamos fazer um script informando onde está localizado o bundle.js como por exemplo `<script src="../dist/bundle.js"></script>`, mas para facilitar a automação do diretório desse arquivo, caso ele mude. Então vamos instalar um plugin que informe isso automático

### Webpack Dev Server

- Toda vez que vamos atualizar o código temos q converte-lo usando o “yarn webpak”, tem uma forma de fazer isso de forma automática, instalando o “webpack-dev-server”, assim ele fica observando a pasta src, e sempre após alguma mudança ele converte o código

### Utilizando o Souce Maps

- Ele serve para apresenta o código original na hora da produção, isso evita que se ouve um erro no código a gente não se perca no código convertido pelo babel

### Utilizando o Souce Maps

- Ele serve para apresenta o código original na hora da produção, isso evita que se ouve um erro no código a gente não se perca no código convertido pelo babel

### Ambiente Dev e Produção

- Criando webpack serve para desenvolvimento e outro de fato para produção

### Importando arquivos CSS

- Precisamos instalar duas dependência `instalando: yarn add style-loader css-loader -D`

### Utilizando SASS

- Pre-processador CSS de encadeamento entre outros



## Conceitos importantes

- Primeiro componente React; Propriedades no React; Estado do componente; A imutabilidade no React; Fast Refresh no Webpack


### Fast Refresh no Webpack

- Ao utilizar o webpack dev serve e atualizar ao no código ele carrega a pagina sozinho, mas ele reseta tudo, e tiver com algum estado ele reseta, para resolvermos isso vamos usar o Fast Refresh no Webpack
