import React from 'react'
import './header.css'

const Header = ({countTodo, countDone}) => {
    return (
        <div className='app-header d-flex'>
            <h1>ToDo List</h1>
            <h2>{`${countTodo} more to do, ${countDone} done`}</h2>
        </div>
    )
}

export default Header;