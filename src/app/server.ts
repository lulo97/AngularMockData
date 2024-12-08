import { createServer, Model } from "miragejs";
import { BACKEND_URL } from "../utils/utils";
import { data as todos } from "../todo/utils";

export function makeServer({ environment = "development" }) {
    return createServer({
        environment,

        models: {
            todos: Model,
        },

        routes() {
            this.get(BACKEND_URL + "/todos", () => todos);

            this.post(BACKEND_URL + "/todos", (schema, request) => {
              const newTodo = JSON.parse(request.requestBody); 
              todos.push(newTodo);
              return newTodo;
            });
            
            this.put(`${BACKEND_URL}/todos/:id`, (schema, request) => {
              const id = request.params["id"];
              const updatedTodo = JSON.parse(request.requestBody);
          
              const index = todos.findIndex((todo) => todo.ID === id);
              if (index !== -1) {
                todos[index] = { ...todos[index], ...updatedTodo }; // Update the todo
              }
              return todos[index];
            });
          
            this.delete(`${BACKEND_URL}/todos/:id`, (schema, request) => {
              const id = request.params["id"];
              const index = todos.findIndex((todo) => todo.ID === id);
              if (index !== -1) {
                todos.splice(index, 1); // Remove the todo
              }
              return {};
            });
        },
    });
}
