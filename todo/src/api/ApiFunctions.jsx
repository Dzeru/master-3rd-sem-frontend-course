import { instance } from './ApiConfig'

export function addTask(title) {
    console.log('POST /task')
    instance.post('/task', {
        title: title
    })
    .then(function (response) {
        console.log(response)
        return response.data
    })
    .catch(function (error) {
        window.alert(error)
    })
}

export function updateTask(id) {
    console.log('POST /task/' + id)
    instance.post('/task/' + id)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        window.alert(error)
    })
}


export function deleteTask(id) {
    console.log('DELETE /task/' + id)
    instance.delete('/task/' + id)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        window.alert(error)
    })
}