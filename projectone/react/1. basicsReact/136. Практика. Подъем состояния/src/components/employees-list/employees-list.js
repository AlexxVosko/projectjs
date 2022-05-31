import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


// передача функуии в props
const EmployeesList = ({data, onDelete, onToggleProp}) => {

    // перебор массива и создание необходимого компонента
    const elements= data.map(item => {
        // вытащить св-во id, а остальные записать в itemProps
        const {id, ...itemProps} = item; // деструктуризация по остаточному принципу
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={()=> onDelete(id)}
                onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                /> 
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;