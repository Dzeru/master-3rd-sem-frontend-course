import React from 'react'
import { instance } from '../../../../api/ApiConfig'

// Поле для добавления задачи
class CreateTodoField extends React.Component {

    state = {
        title: ''
    }
    

    // отправляем запрос на создание задачи с заданным заголовком, 
    // в ответ получаем задачу, передаем ее в метод класса Home для отображения в списке
    onTrigger = (title) => {
        console.log('POST /task')
        instance.post('/task', {
            title: title
        })
        .then(response => {
            const newTodo = response.data
            this.setState({ title: '' })
            this.props.setTodos(newTodo)
        })
        .catch(error => {
            this.setState({ title: '' })
            window.alert(error)
        })
    }

    render() {
        return (
        <div className='flex items-center justify-between mb-4 px-5 py-3 rounded-2xl w-full border-zinc-800 border-2 mt-16'>
            <input 
                type="text" 
                placeholder='Do a barrel roll'
                onChange={e => this.setState({ title: e.target.value })}
                value={this.state.title}
                // onKeyPress из видео уже устарел, и к тому же не реагирует на клавиши alt, shift и иже с ними, в отличие от onKeyDown
                onKeyDown={e => e.key === 'Enter' && this.onTrigger(this.state.title)}
                className='bg-transparent w-full border-none outline-none'
            />
        </div>
        )
    }
}

export default CreateTodoField