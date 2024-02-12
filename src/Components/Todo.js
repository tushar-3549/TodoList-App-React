import React, { useState } from 'react';
import style from './todo.module.css';

function Todo(props) {
    const [title, setTitle] = useState(props.todo.title);
    const [description, setDescription] = useState(props.todo.desc);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = props;

    const handleClicked = (id) => {
        props.onRemoveTodo(id);
    };
    return (
        <article className={style.todo}>
            <div>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isEditing}
                />
                <br />
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <button
                    className={style.btn}
                    onClick={() => {
                        if (isEditing) {
                            props.handleEditTodo(id, title, description);
                            setIsEditing(!isEditing);
                        }
                    }}
                >
                    <i className='fa fa-check-circle fa-2x'></i>
                </button>
            </div>
            <div>
                <button
                    className={style.btn}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    <i className='fa fa-edit fa-2x'></i>
                </button>
            </div>
            <div>
                <button className={style.btn} onClick={() => handleClicked(id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
}
export default Todo;