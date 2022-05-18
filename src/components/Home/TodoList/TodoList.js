import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../LoadingSpinner/Loading';

const TodoList = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const toDo = event => {
        if (user) {
            navigate('/todo');
        }
        else {
            navigate('/login');
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    let errorText;
    if (error) {
        errorText = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    return (
        <div>
            <h2 className='text-dark text-center my-3'>Welcome to TODO List</h2>
            {errorText}
            <div className='text-center'>
                <Button className='btn-dark' onClick={toDo}>Make TODO List</Button>
            </div>
        </div>
    );
};

export default TodoList;