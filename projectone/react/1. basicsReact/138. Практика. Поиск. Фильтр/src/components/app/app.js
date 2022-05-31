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
          {name: 'Alex Vosko' , salary: '13000', increase: true, like: true, id:1},
          {name: 'Max Smith' , salary: '800', increase: false, like: false, id:2},
          {name: 'Andy Curtel' , salary: '2000', increase: false, like: false, id:3},
        ],
        term: '',
        filter: 'all'
      }
      this.maxId = 4;
    }

    // Удаление элементов
    deleteItem = (id) =>{
      this.setState(({data}) =>{
        return {
            data: data.filter(item => item.id !== id )
        }

      })
    }

    // Добавление элементов
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

  // переключение параметра increase
  onToggleIncrease = (id) =>{
    console.log(`Increase this ${id}`);
      this.setState(({data}) => ({
          data: data.map(item => {
            if(item.id === id ){
              return {...item, increase: !item.increase}
            }
            return item;
          })
      }))

  }

  onToggleLike = (id) =>{
    console.log(`Like this ${id}`);
    this.setState(({data}) => ({
        data: data.map(item => {
          if(item.id === id ){
            return {...item, like: !item.like}
          }
          return item;
        })
    }))
  }

  // объеденненный метод для Increase и Like
  onToggleProp = (id, prop) =>{
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id ){
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

    // метод поиска
    // аргументы - массив, строка 
    searchEmp = (items, term) =>{
      //  если строка пустая
        if(term.length === 0){
          return items;
        }

        return items.filter(elem => {
            // поиск по всем совпадениям
            // вернет массив элементов подходящий под поиск
            return elem.name.indexOf(term) > -1
        })
    }

    // подъем события поиска
    onUpdateSearch = (term) =>{
        this.setState({term})
    }


     // метод фильтра
     filterBtn = (items, filter) =>{
      switch (filter){
         case 'like': 
               return items.filter(item => item.like);
         case 'moreThen1000': 
               return items.filter(item => item.salary > 1000);
         default : 
             return items;
      }
     }

     onFilterSelect = (filter) => {
        this.setState({filter});
     }



  render(){
      const {data, term, filter} = this.state;
      const employees = this.state.data.length; // количество всех сотрудников
      const increasedItem = this.state.data.filter(item => item.increase === true).length; // количество сотрудников на повышение

      const visibleData = this.filterBtn(this.searchEmp(data, term), filter);


      return (
        <div className="app">
            <AppInfo employees={employees} increasedItem={increasedItem} />

            <div className="search-panel">
              <SearchPanel 
                 onUpdateSearch={this.onUpdateSearch}
              /> 
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>

            <EmployeesList 
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}
            />
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
      );
  }


}


export default App;