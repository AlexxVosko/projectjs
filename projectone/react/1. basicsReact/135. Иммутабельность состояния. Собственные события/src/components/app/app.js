import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: [
          {name: 'Alex Vosko' , salary: '13000', increase: true, id:1},
          {name: 'Max Smith' , salary: '800', increase: false, id:2},
          {name: 'Andy Curtel' , salary: '2000', increase: false, id:3},
        ]
      }
      this.maxId = 4;
    }

    deleteItem = (id) =>{
      this.setState(({data}) =>{
        // чтобы найти определенный объект нужен его индекс
        // findIndex() - будет возвращен номер 
        const index = data.findIndex(elem => elem.id === id);

        // создание нового массива
        //1) метод slice
        const before = data.slice(0, index); // c первого элемента до искомого
        const after  = data.slice(index+1); // копирование следующего элемента от искомого до конца массива
        const newArr = [...before, ...after]; // объединение кусочков
        //return {
          //data: newArr
        //}

        //2) метод filter отфильтровать массив data
        return {
            data: data.filter(item => item.id !== id )
        }

      })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
      const newItem = {
          name, 
          salary,
          increase: false,
          like: false,
          id: this.maxId++
      }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
  }

    render(){
      return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
            </div>

            <EmployeesList 
              data={this.state.data}
              onDelete={this.deleteItem}
            />
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    );
    }


}


export default App;