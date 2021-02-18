import React from 'react';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <li className="todo-item">
                <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.handleChange(this.props.todo.id)} />
                {this.props.todo.title}
            </li>
        )
    }
}
export default TodoItem;