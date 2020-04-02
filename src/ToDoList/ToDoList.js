import React from 'react';
import todos from "./ToDoData"
import ToDoItem from "./ToDoItem"

class TodoList extends Component {
    state = {
        logIn: true,
        todoDataState: todos
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
            if (todos.id === id) {
                todos.completed = !todos.completed
            }
            return todos
        })
        this.setState({ todoDataState: updatedTodoData })
    }


    handleSortAZ = () => {
        const sortedArray = this.state.todos.sort((a, b) => {
            let eltA = a.todo.toUpperCase()
            let eltB = b.todo.toUpperCase()
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ todoDataState: sortedArray })
    }

    [{ todo: "" }, { todo: "" }, { todo: "" }, { todo: "" }]
    handleSortZA = () => {
        const sortedArray = this.state.todos.sort((a, b) => {
            let eltA = a.todo.toUpperCase()
            let eltB = b.todo.toUpperCase()
            if (eltA < eltB) {
                return 1
            } else if (eltA > eltB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ todoDataState: sortedArray })
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
                <div>
                    <input type="button" id={props.id} name="ToDo" value=""
                        onChange={() => props.handleChangeProps(props.id)} />
                    <label htmlFor={props.id}>Sort by A-Z</label>
                </div>


                <button onClick={this.handleSortAZ}>Sort A-Z</button>
                <button onClick={this.handleSortZA}>Sort Z-A</button>
                {this.state.todoDataState.map(elt => <ToDoItem
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

export default ToDoList;

let arr = ["test", "super", "Orange", "Html", "Berlin"] //sort arr A-z