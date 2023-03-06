import { Component, DoCheck } from "@angular/core";
import { TodoList } from "../../model/todo-list";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements DoCheck {
  todoList: Array<TodoList> = [];
  todoId = Number();

  ngDoCheck() {
    this.todoList.sort(
      (first, last) => Number(first.isComplete) - Number(last.isComplete)
    );
  }

  emitTodo(event: string) {
    const todoObj = { todo: event, isComplete: false };
    this.todoList.push(todoObj);
  }

  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }
}
