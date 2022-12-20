package com.dzeru.todoapi.services

import com.dzeru.todoapi.entities.Task
import com.dzeru.todoapi.repositories.TaskRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class TaskService(private val taskRepository: TaskRepository) {

    fun getAllTasks(): List<Task> {
        println("Get all tasks")
        return taskRepository.findAll()
    }

    fun addTask(title: String): Task {
        val newTask = taskRepository.save(Task(title = title))
        println("Task '${newTask.title}' is created")
        return newTask
    }

    fun deleteTask(id: Long) {
        taskRepository.deleteById(id)
        println("Task with id $id is deleted")
    }

    fun updateTask(id: Long): Task? {
        return taskRepository.findByIdOrNull(id)?.let {
            it.isCompleted = !it.isCompleted
            val updatedTask = taskRepository.save(it)
            println("Task with id $id is updated (isCompleted=${it.isCompleted})")
            updatedTask
        }
    }
}
