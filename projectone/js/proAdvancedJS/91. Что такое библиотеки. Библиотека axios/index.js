
// Библиотека - участок кода или ресурс, который решает определенную проблему
// готовое решение

// Библиотека axios
// https://github.com/axios/axios

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get('http://localhost:3000/menu')   
.then(data=>console.log(data));

axios.get('http://localhost:3000/menu')   
.then(data=>{
  data.data.forEach(({img,altimg,title,descr,price}) =>{
      new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
  });
});

// отличие от fetch - axios возвращает более подробный ответ от сервера