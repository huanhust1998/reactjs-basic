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
                <input type="checkbox" />
                {this.props.todo.title}
            </li>
        )
    }
}
export default TodoItem;