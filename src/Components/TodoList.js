import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { todoData } from '../todoData.js'
class TodoList extends Component {
    state = {
        logIn: true,
        todoDataState: todoData
    }
    handleLogIn = () => {
        console.log("it works")
        // this.state.logIn:false //fasle
        // this.setState({ logIn: false }, () => {
        //     console.log(this.state.logIn)
        // })   //asynchrone function/method
        this.setState({ logIn: !this.state.logIn })

        //stateless function
        // hooks useContent
    }
    handleChange = (id) => {
        console.log(id)
        const updatedTodoData = this.state.todoDataState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({ todoDataState: updatedTodoData })
    }
    
    render() {
        // let status
        // if (this.state.logIn === true) {
        //     status = "In"
        // } else {
        //     status = "out"
        // }
        return (
            <section>
                {this.state.todoDataState.map(elt => <TodoItem
                    todo={elt.todo}
                    key={elt.id}
                    id={elt.id}
                    completed={elt.completed}
                    handleChangeProps={this.handleChange}
                />)}
                <p>The user is Log {this.state.logIn ? "In" : "Out"}</p>
                <button onClick={this.handleLogIn}>Log IN/OUT</button>
            </section>
        );
    }
}

export default TodoList;