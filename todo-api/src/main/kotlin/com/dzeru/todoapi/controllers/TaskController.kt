package com.dzeru.todoapi.controllers

import com.dzeru.todoapi.dtos.CreateTaskRequest
import com.dzeru.todoapi.entities.Task
import com.dzeru.todoapi.services.TaskService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*")
@RequestMapping("/todo/api")
class TaskController(private val taskService: TaskService) {

    @GetMapping("/task/all")
    fun getAllTasks(): List<Task> {
        println("GET /all")
        return taskService.getAllTasks()
    }

    @PostMapping("/task")
    fun addTask(@RequestBody createTaskRequest: CreateTaskRequest): Task {
        println("POST /task $createTaskRequest")
        return taskService.addTask(createTaskRequest.title)
    }

    @PostMapping("/task/{id}")
    fun updateTask(@PathVariable("id") id: Long): Task? {
        println("POST /task/$id")
        return taskService.updateTask(id)
    }

    @DeleteMapping("/task/{id}")
    fun deleteTask(@PathVariable("id") id: Long) {
        println("DELETE /task/$id")
        taskService.deleteTask(id)
    }
}
