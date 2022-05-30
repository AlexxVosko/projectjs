import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



const EmployeesList = ({data}) => {

    // перебор массива и создание необходимого компонента
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

export default EmployeesList;