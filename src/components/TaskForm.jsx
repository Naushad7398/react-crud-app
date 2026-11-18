import React from 'react'

const TaskForm = ({ inputValue, setInputValue, handleSubmit, editId }) => {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter a task...'
                style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
            />
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                {editId ? 'Update' : 'Add'}
            </button>
        </form>
  )
}

export default TaskForm