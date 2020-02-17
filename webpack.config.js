/* Configuracion de webpack
Implementacion de HtmlWebpackPlugin para manejar el Html por medio de webpack
template para indicar que usara como plantilla inicial index.html

Se instala babel core para asegurarnos que todo el codigo de javascript escrito este disponible para cualquier navegador
babel preset env para tener la ultima version aceptada por ECMAScript commited
babel loader para el loader que usara webpack
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
