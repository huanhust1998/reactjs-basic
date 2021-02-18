import React from 'react';
import Header from "./layout/Header";
import Todos from "./Todos";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Setup development environment",
                    completed: true
                },
                {
                    id: 2,
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: 3,
                    title: "Deploy to live server",
                    completed: false
                }
            ]

        }
    }

    handleCheckboxChange = id => {
        let numbers = [5, 4, 3, 2, 1]

        numbers.map(element => element * element);
        console.log(numbers.map(element => element * element));

        this.setState({
            todos: this.state.todos.map((todo,index) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                console.log("TODO: "+index, todo)
                return todo;
            })
        })
    };

    render() {
        return (
            <div className="container1">
                <Header/>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}/>
            </div>
        );
    }
}

export default TodoApp;