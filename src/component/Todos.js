import React from 'react';

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
                            <li>{todo.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

}
export default Todos;