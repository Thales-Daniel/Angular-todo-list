import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"],
})
export class TodoInputComponent implements OnInit, OnDestroy {
  data = new Date();
  timer: any = null!;

  ngOnInit(): void {
    this.timer = setInterval(() => (this.data = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
