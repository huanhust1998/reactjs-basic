/*
import React from 'react';
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import axios from "axios";

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
            todos: this.state.todos.map((todo, index) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };
    deletedTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => this.setState({
                todos: [
                    ...this.state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            }))

    }
    addTodo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data)
                this.setState({
                    todos: [...this.state.todos, response.data]
                })
            });

    };

    componentDidMount() {
        const config = {
            params: {
                _limit: 5
            }
        }
        //tạo GET request để lấy danh sách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => this.setState({
                todos: response.data
            }));
    }


    /!*searchTodoItem = e => {
        let listTodo = [];
        let listTodoSearch = []
        listTodo = this.state.todosSearch;
        for(let x in listTodo){
            if(listTodo[x].title.toUpperCase().includes(e.target.value.toUpperCase())){
                listTodoSearch.push(listTodo[x])
            }
        }
        this.setState({
            todos:listTodoSearch
        })
    }*!/

    searchTodo = (e) => {
        let listTodo = [];
        let listTodoSearch = []
        listTodo = this.state.todosSearch;
        for (let x in listTodo) {
            if (listTodo[x].title.toUpperCase().includes(e.target.value.toUpperCase())) {
                listTodoSearch.push(listTodo[x])
            }
        }
        this.setState({
            todos: listTodoSearch
        })
    }

    render() {
        return (
            <div className="container1">
                <Header/>
                {/!*<input placeholder="search todo item..." title="text" onChange={this.searchTodoItem}/>*!/}
                <SearchTodo searchTodo={this.searchTodo}/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}
                       deletedTodo={this.deletedTodo}/>
            </div>
        );
    }
}

export default TodoApp;*/
import React, {useState, useEffect} from "react";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import axios from "axios";

function TodoApp() {

    const [state, setState] = useState({
        todos: []
    })

    const handleCheckboxChange = id => {
        setState({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    const deleteTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => setState({
                todos: [
                    ...state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            }))

    }

    const addTodo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data)
                setState({
                    todos: [...state.todos, response.data]
                })
            });
    }

    useEffect(() => {
        const config = {
            params: {
                _limit: 5
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => setState({ todos: response.data }));

    },[]);

    return (
        <div>
            <Header/>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={state.todos}
                   handleChange={handleCheckboxChange}
                   deleteTodo={deleteTodo}/>
        </div>
    )
}
export default TodoApp;