import React from 'react'

const Filter = ({filter}) => {
    return (
        <div className='btn-group'>
            <button className='btn border' onClick={(e)=>filter(e)}>All</button>
            <button className='btn border' onClick={(e)=>filter(e)}>Active</button>
            <button className='btn border' onClick={(e)=>filter(e)}>Done</button>
        </div>
    )
}

export default Filter;