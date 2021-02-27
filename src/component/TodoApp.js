import React from 'react';
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

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
        console.log("ID: ", id);
        this.setState({
            todos: this.state.todos.map((todo,index) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };
    deletedTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    }
    addTodo = title => {
        console.log(title);
    };

    render() {
        return (
            <div className="container1">
                <Header/>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange} deletedTodo={this.deletedTodo}/>
            </div>
        );
    }
}

export default TodoApp;