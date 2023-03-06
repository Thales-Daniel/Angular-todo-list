import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoList } from "../../model/todo-list";

@Component({
  selector: "app-todo-row",
  templateUrl: "./todo-row.component.html",
  styleUrls: ["./todo-row.component.css"],
})
export class TodoRowComponent {
  todo = "";
  isComplete = false;
  @Input() todoId = Number();
  @Output() deleteTodoEmit = new EventEmitter();

  @Input() todoObj: TodoList = { todo: this.todo, isComplete: this.isComplete };

  deleteTodo() {
    this.deleteTodoEmit.emit(this.todoId);
  }

  show() {
    console.log(this.todoObj);
  }
}
