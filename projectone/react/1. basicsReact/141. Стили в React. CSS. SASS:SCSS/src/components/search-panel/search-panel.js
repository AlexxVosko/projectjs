import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value;
        // установка локального состояния
        this.setState({term});
        // проброс наверх (поднятие локального состояния - родителю)
        this.props.onUpdateSearch(term);
    }

    render(){
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.term}
                   onChange={this.onUpdateSearch}
            />
        )
    }

}
export default SearchPanel;