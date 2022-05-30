
// пока данные установлены жестко в верстку компонента
// но в будущем эти данные будут приходить от сервера

// Как такой список сгенерировать программно?

// допустим данные появляются в компоненте app.js 
function App(){

    const data = [
      {name: 'Alex Vosko' , salary: '3000'},
      {name: 'Max Smith' , salary: '800'},
      {name: 'Andy Curtel' , salary: '2000'},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm/>
        </div>
    );
}

// файл employees-list-item.js
// было
const EmployeesListOld = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Alex Vosko" salary={3000} />
            <EmployeesListItem name="Max Smith" salary={800} />
            <EmployeesListItem name="Andy Curtel" salary={2000} />
        </ul>
    )
}

// стало

const EmployeesList = ({data}) => {

    // перебор массива и создание необходимого компонента
    // чтобы не писать name={item.name} salary={item.salary}
    // прописать {...item}  - результат идентичный 
    //  spread оператор - разворачивание объекта на отдельные элементы
    const elements= data.map(item => {
        return (
            <EmployeesListItem {...item} /> 
        )
    });
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
