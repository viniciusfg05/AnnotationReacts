module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ]
}

//forma de passa um função é colocar o "@babel/preset-react" entre []
