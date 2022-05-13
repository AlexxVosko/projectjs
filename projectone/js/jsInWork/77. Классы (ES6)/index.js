'use strict';

// Классы - красивая обертка функций-конструкторов (синтаксический сахар)
// Классы внутри все те же функции
// Классы = Шаблонизация 
// Название класса начинается с большой буквы
// Чтобы сконструировать класс - свойство constructor


// Приниципы ООП
//1) Абстракция - отделение концепции (шаблона) от экземпляра 
//2) Наследование - способоность объекта или класса базироваться на другом объекте/классе 

class Rectangle {
    // параметры приходят извне при создании экземпляра класса
    constructor(height,width){
        // после того как переданы аргументы, их нужно вписать в свойства этого нового объекта
        this.height = height;
        this.width = width;
    }
    //методы класса
     calcArea(){
         return this.height * this.width;
     }
}

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);
console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

// Наследование
class ColoredRectangleWithText extends Rectangle {
    constructor(height,width,text,bgColor){
        //чтобы заново не писать свойства - метод super()
        // вызывает суперконструктор родителя
        //!! super(); - всегда на первом месте в конструкторе
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25,10,'Hello','red');
div.showMyProps(); // Текст: Hello, цвет: red
console.log(div.calcArea()); // 250

