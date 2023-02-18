import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";

@NgModule({
  declarations: [HomeComponent, TodoInputComponent],
  imports: [CommonModule],
})
export class HomeModule {}
