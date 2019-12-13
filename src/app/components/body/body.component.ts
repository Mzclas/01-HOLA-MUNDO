import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "../body/body.component.html"
})
export class BodyComponent {
  show = true;

  sentence: any = {
    message: "Hoy día la gente conoce el precio de todo y el valor de nada.",
    author: "Oscar Wilde"
  };

  characters: string[] = ["Spiderman", "Ironman", "Thor"];
}
