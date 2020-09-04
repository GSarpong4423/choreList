import React from 'react';

import './newChore.css';

const NewChore = props => {
    const addChoreHandler = event => {
        event.preventDefault();

    const newChore = {
        id: Math.random().toString(),
        text: 'My new chore'
    };
    
    props.onAddChore(newChore);

    };

    return <form className="new-chore"onSubmit ={addChoreHandler}>
        <input type ="text" />
        <button type="submit">Add Chore </button>
    </form>


};

export default NewChore;