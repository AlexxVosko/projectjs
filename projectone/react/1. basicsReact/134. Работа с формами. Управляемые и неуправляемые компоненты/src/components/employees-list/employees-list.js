import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



const EmployeesList = ({data}) => {

    // перебор массива и создание необходимого компонента
    const elements= data.map(item => {
        // вытащить св-во id, а остальные записать в itemProps
        const {id, ...itemProps} = item; // деструктуризация по остаточному принципу
        return (
            <EmployeesListItem key={id} {...itemProps} /> 
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;