import React from 'react';
import Banner from './Banner';
import TodoList from './TodoList/TodoList';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TodoList></TodoList>
        </div>
    );
};

export default Home;