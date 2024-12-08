import { Injectable } from "@angular/core";
import { ITodo } from "./utils";
import { BACKEND_URL } from "../utils/utils";

@Injectable({
    providedIn: "root",
})
export class TodoService {
    end_point = `${BACKEND_URL}/todos`;

    async fetchData(): Promise<ITodo[]> {
        const response = await fetch(this.end_point);
        if (!response.ok) {
            console.error(
                "Failed to fetch data:",
                response.status,
                response.statusText
            );
            return [];
        }
        return await response.json();
    }

    async add(new_record: ITodo): Promise<void> {
        const response = await fetch(this.end_point, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_record),
        });
        if (!response.ok) {
            console.error(
                "Failed to add:",
                response.status,
                response.statusText
            );
        }
    }

    async edit(updated_record: ITodo): Promise<void> {
        const response = await fetch(`${this.end_point}/${updated_record.ID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated_record),
        });
        if (!response.ok) {
            console.error(
                "Failed to edit:",
                response.status,
                response.statusText
            );
        }
    }

    async delete(id: string): Promise<void> {
        const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            console.error(
                "Failed to delete:",
                response.status,
                response.statusText
            );
        }
    }
}
