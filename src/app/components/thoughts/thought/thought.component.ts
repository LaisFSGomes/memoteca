import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() thought = {
    content: "it worked yesterday",
    author: "Developer",
    model: "modelo3",
  };
}
