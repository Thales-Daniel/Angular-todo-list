import { Component } from "@angular/core";
import { TodoList } from "../../model/todo-list";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  todoList: Array<TodoList> = [];
  todoId = Number();

  emitTodo(event: string) {
    const todoObj = { todo: event, isComplete: false };
    this.todoList.push(todoObj);
  }

  deleteTodo() {
    this.todoList.splice(this.todoId, 1);
  }
}
