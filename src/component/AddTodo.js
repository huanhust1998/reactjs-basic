import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:''
        }
    }
    onInputChange=e=>{
        this.setState({
            title : e.target.value
        })
    }
    addTodo = title => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };


    render() {
        return (
            <form className="form-container">
                <input type="text" placeholder="Add Todo..." className="input-text" value={this.state.title} onChange={this.onInputChange}/>
                <input type="submit" value="Submit" onSubmit={this.addTodo} className="input-submit"/>
            </form>
        );
    }
}
export default AddTodo;