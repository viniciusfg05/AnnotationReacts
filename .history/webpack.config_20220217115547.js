const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//Dentro do Js, existe variaveis ambientes que são para configurar alguma coisa dependendo do ambiente de aplicação
//NODE.ENV: variavel que serve dizer se o ambiente é de desenvolvimento ou produção
//alterar essas configuraçãoes mode: insDevelopment ? 'development' : 'production', devtool: insDevelopment ? 'eval-source-map' : 'source-map',
//Criando a variavel ambiente instalando o "yarn add cross-env -D" serve para criar variavel ambiente independente do sistema operacional
//No package.json - vamos criar alguns scripts para facilitar -

const insDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: insDevelopment ? 'development' : 'production',
  devtool: insDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

//template = Qual arquivo de template ele vai gerar o html
