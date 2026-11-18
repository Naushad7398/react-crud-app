import React from 'react'

const TaskItem = ({task, handleEdit, handleDelete}) => {

    return (
        <div>
            <span>{task.text}</span>
            <div>
                <button onClick={()=> handleEdit(task)} style={{marginRight: '10px', cursor: 'pointer', padding: '5px 10px'}}>editId</button>
                <button onClick={() => handleDelete(task.id)} style={{ cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px' }}>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem