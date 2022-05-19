import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItems = ({ todos, setTodos, editTodo, setEditTodo }) => {
    const handleCheck = (todo) =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = ({ id }) =>{
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    return (
        <div>
            <Table className='w-50 mx-auto' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Check</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => <tr key={todo.id}>
                            <td><input className='text-white bg-dark' type="text" value={todo.title} onChange={event => event.preventDefault()} /></td>
                            <td><Button onClick={() => handleCheck(todo)}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></Button></td>
                            <td><Button onClick={() => handleEdit(todo)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button></td>
                            <td><Button onClick={() => handleDelete(todo)} className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default TodoItems;