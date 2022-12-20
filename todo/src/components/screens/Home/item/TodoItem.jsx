import React from 'react'
import Check from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

// Класс задачи из списка дел
// Принимает на вход DTO задачи, функцию изменения задачи, функцию удаления задачи
// С помощью cn в className можно гибко управлять стилями на основе переданных данных
const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 p-5 rounded-2xl w-full bg-zinc-800'>
            <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={cn({
                    'line-through': todo.isCompleted
                })}>
                    {todo.title}
                </span>
           </button>
           <button onClick={() => removeTodo(todo.id)}>
           <BsTrash size={22} className='text-gray-500 hover:text-red-700 transition-colors ease-in-out duration-300' />
                </button>
        </div>
    )
}

export default TodoItem