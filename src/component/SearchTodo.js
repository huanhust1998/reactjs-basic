import React from 'react';

class SearchTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-container">
                <input type="text" placeholder="Search title..." className="input-text"
                       onChange={this.props.searchTodo}/>
            </form>
        )
    }
}

export default SearchTodo;