'use strict';

let path = require('path');

module.exports = {
  mode: 'development',  // режим работы 
  entry: './js/script.js', // файл с которого начинается работа
  output: { // файл выхода
    filename: 'bundle.js', // название файла
    path: __dirname + '/js' //путь до файла
  },
  watch: true, //вкл отслеживанние изменение файлов

  devtool: "source-map", //технология храенения исходников

  module: { // модули и их настройка
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
    
  } 
};

// mode: могут быть 2 'development' и 'prodaction'
// entry: обычно записываются все зависимости require или импорт из нового стандарта
    // если нужно использовать несколько файлов - нужно записать объект
// output: задается только в виде объекта
    // конфигурируется файл на выходе
// watch: отслеживание изменение файлов (true/false)
// devtool: 
// Понятие source-map - технология хранящая информацию об исходниках и месторасположения кода


