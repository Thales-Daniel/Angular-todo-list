import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"],
})
export class TodoInputComponent implements OnInit, OnDestroy {
  data = new Date();
  timer: any = null!;
  todo = "";
  @Output() emitTodo = new EventEmitter();

  ngOnInit(): void {
    this.timer = setInterval(() => (this.data = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  addTodo() {
    this.todo.trim();

    if (this.todo == "") {
      return window.alert("Adicione um valor valido");
    }

    this.emitTodo.emit(this.todo);
    this.todo = "";
  }
}
