import React from 'react';
import './todoListItem.css';

const TodoListItem = ({id, label, done, important, onToggleDone, onToggleImportant, onDeleteItem}) => {


    let classNames = 'todo-list-item';
    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }


    return (
        <div className={classNames}>
            <span className='todo-list-item-label' onClick={() => onToggleDone(id)}>{label}</span>
            <div className='todo-list-item-btn'>
                <button className="btn btn-outline-danger btn-sm float-right" onClick={() => onDeleteItem(id)}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <button className="btn btn-outline-success btn-sm float-right" onClick={() => onToggleImportant(id)}>
                    <i className='fa fa-exclamation'></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;