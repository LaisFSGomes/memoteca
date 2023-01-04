import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent {
  thoughtsList = [
    {
      content: "it worked yesterday",
      author: "Developer",
      model: "modelo3",
    },
    {
      content: "I can't test everything",
      author: "Developer",
      model: "modelo1",
    },
    {
      content: "I can't know everything",
      author: "Developer",
      model: "modelo2",
    },
  ];
}
