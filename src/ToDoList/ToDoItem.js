import React from 'react';

const styleBox = { border: "1px solid black", padding: "10px", margin: "20px" }




const ToDoItem = (props) => {
    return (
        <div style={styleBox}>
            <input type="checkbox" id={props.id} name="ToDo" value=""
                checked={props.completed}
                onChange={() => props.handleChangeProps(props.id)} />
            <label htmlFor={props.id}>{props.todo}</label>
        </div>
    );
}

export default ToDoItem;