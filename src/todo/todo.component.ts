import { Component } from "@angular/core";
import { ITodo } from "./utils";
import { CommonModule } from "@angular/common";
import { TodoService } from "./todo.service";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "todo",
    templateUrl: "./todo.component.html",
})
export class Todo {
    todos: ITodo[] = [];
    service: TodoService = new TodoService();

    ngOnInit() {
        this.fetchData();
    }

    async add() {
      const newTodo = { ID: '6', NAME: 'New todo', DESCRIPTION: "" };
      await this.service.add(newTodo)
      await this.fetchData();
    }
    
    async edit(ID: string) {
      const updatedTodo = { ID, NAME: 'Updated todo', DESCRIPTION: "Updated description" };
      await this.service.edit(updatedTodo);
      await this.fetchData();
    }
    
    async delete(ID: string) {
      await this.service.delete(ID);
      await this.fetchData();
    }
    
    async fetchData() {
      this.todos = await this.service.fetchData();
    }
}
