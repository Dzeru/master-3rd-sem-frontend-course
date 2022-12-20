import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'
import { updateTask, deleteTask } from '../../../api/ApiFunctions'
import { instance } from '../../../api/ApiConfig'

export default class Home extends React.Component {
  
    // состоянием элемента является список задач
    state = {
        todos: []
    }

    // инициализация списка задач, запрос на сервер
    componentDidMount() {
        this.setTodos()
      }

    setTodos() {
        console.log('GET /task/all')
        instance.get('/task/all')
        .then( response => {
            const todos = response.data
            this.setState( { todos })
        })
        .catch(error => {
            window.alert(error)
        })
    }

    changeTodo = id => {
        let newTodos = this.state.todos
        newTodos.map(todo => { if (todo.id === id) { todo.isCompleted = !todo.isCompleted } })
        this.setState( {
            todos: newTodos
        })
        updateTask(id)
    }

    // удаляем элемент с определенным id и отправляем запрос на удаление на сервер
    removeTodo = id => {
        let newTodos = this.state.todos
        newTodos = newTodos.filter(todo => todo.id !== id)
        this.setState( {
            todos: newTodos
        })
        deleteTask(id)
    }

    // получаем свежесозданную задачу из CreateTodoField и отображаем ее
    handleNewTodoCallback = (createTodoData) => {
        const newTodos = [...this.state.todos, createTodoData]
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className=' text-white w-4/5 mx-auto'>
                <h1 className='font-bold text-2xl text-center mb-8'>Todo, todo, todododooo</h1>

                {this.state.todos && this.state.todos.length > 0 && (
                    this.state.todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        changeTodo={this.changeTodo} 
                        removeTodo={this.removeTodo} />
                    )) 
                )}
                {this.state.todos.length === 0 && (
                    <div className='text-center text-xl bg-zinc-800 px-5 py-5'>Task list is empty</div>
                )}
                <CreateTodoField setTodos={this.handleNewTodoCallback} />
            </div>
        )
    }
}
