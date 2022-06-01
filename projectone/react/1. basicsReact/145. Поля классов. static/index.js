
// Поля классов (Class Fields) - эксперементальный синтаксис используется с классовыми компонентами

//1) передача контекса вызова
onValueChange = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

//2) создание любых свойств экземпляра без конструктора
// без указанния что это переменная 
// когда для целого класса должно быть одно свойство

//! методы можно использовать для создания мини-библиотеки
//! сво-ва можно использовать чтобы на один класс была одна какая то переменная 

// static - методы и свойства которые используются без создания класса (через new) называются статическими
// они используются прямо на самом классе (Math.random())

class EmployeesAddForm extends Component {

        state= {
            name:'',
            salary: ''
        }


    // Запись св-во в объект
    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onValueSubmit = (e) =>{
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return; // проверка 
        this.props.onAdd(this.state.name, this.state.salary); //запись в state
        // сброс формы
        this.setState({
            name: '',
            salary: ''
        })
    }

    static onLog = () =>{
        console.log('Hey');
    }

    static logged = 'on';


    render(){
        const {name,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onValueSubmit}
                    >
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

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;