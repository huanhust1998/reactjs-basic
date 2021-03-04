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


    /*searchTodoItem = e => {
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
    }*/

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
                {/*<input placeholder="search todo item..." title="text" onChange={this.searchTodoItem}/>*/}
                <SearchTodo searchTodo={this.searchTodo}/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}
                       deletedTodo={this.deletedTodo}/>
            </div>
        );
    }
}

export default TodoApp;