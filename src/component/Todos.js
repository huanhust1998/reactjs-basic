import React from 'react';
import TodoItem from "./TodoItem";

class Todos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.todos.map(todo=>
                            <TodoItem key={todo.id} todo={todo}/>
                        )
                    }
                </ul>
            </div>
        )
    }

}
export default Todos;