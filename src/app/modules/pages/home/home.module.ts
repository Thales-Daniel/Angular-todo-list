import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./components/home/home.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoRowComponent } from "./components/todo-row/todo-row.component";

@NgModule({
  declarations: [HomeComponent, TodoInputComponent, TodoRowComponent],
  imports: [CommonModule],
})
export class HomeModule {}
