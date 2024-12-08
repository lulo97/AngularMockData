import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: "header",
    templateUrl: "./header.component.html",
    styles: `
      a {
      text-decoration: none;
      color: black;
      }

      a:hover {
        text-decoration: underline;
      }
    `,
})
export class Header {}
