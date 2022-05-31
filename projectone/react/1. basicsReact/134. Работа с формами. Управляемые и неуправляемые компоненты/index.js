
// файл employees-add-form.js
// переделка под класс

// input запускает событие onChange /  запускает метод onValueChange
// на котором  setStatе изменяет состояние и записывает состояние в объект  this.state
//  setStatе вызывает метод render() и value записывается  актуальное значение компонента
// значение формы input будет контролироваться Реактом и сам элемент - УПРАВЛЯЕМЫЙ КОМПОНЕНТ (ЭЛЕМЕНТ)

// Преимущество управляемого компонента
// Есть слой каких то данных - state синхронизирован с интерфейсом UI
//  это дает что на все изменения интерфейс будет реаги ровать мгновенно
// полезно при валидации данных

// НЕУПРАВЛЯЕМЫЕ КОМПОНЕНТЫ - значения полей которых хранятся прямо в DOM дереве
// хуже по функционалу чем управляемые компоненты
// <input type="file"/> - всегда будет неуправляемым компонентом


import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:'',
            salary: ''
        }
    }

    // Запись св-во в объект
    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render(){
        const {name,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;