import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import TodoItems from './TodoItems';

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo('');
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        }
        else {
            setInput('');
        }
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }
    return (
        <div>
            <Form onSubmit={onFormSubmit}>
                <InputGroup className="mb-3 mt-4 w-50 mx-auto">
                    <FormControl placeholder='Add your tasks'
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1" required value={input} onChange={onInputChange}
                    />
                    <Button variant="dark" id="button-addon1" type='submit'>
                        Add
                    </Button>
                </InputGroup>
            </Form>
            <TodoItems todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}></TodoItems>
        </div>
    );
};

export default Todo;