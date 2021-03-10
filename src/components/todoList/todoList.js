import React from 'react'
import TodoListItem from "../todoListItem/todoListItem";
import './todoList.css'

const TodoList = ({todoData, onToggleDone, onToggleImportant, onDeleteItem}) => {

    const notFound = <span className='not-found'>{`Todo Items not found`}</span>

    const elements = todoData.length < 1 ? notFound : todoData.map((el) => {
        const {id, label, done, important} = el;

        return (
            <li key={id} className='list-group-item'><TodoListItem id={id}
                                                                   label={label}
                                                                   done={done}
                                                                   important={important}
                                                                   onToggleDone={onToggleDone}
                                                                   onToggleImportant={onToggleImportant}
                                                                   onDeleteItem={onDeleteItem}/></li>
        )
    })

    return (
        <ul className='todo-list list-group'>
            {elements}
        </ul>
    )
}

export default TodoList;