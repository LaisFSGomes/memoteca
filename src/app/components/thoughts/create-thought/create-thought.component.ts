import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought = {
    id: "1",
    content: "On my machine, it works!",
    author: "Developer",
    model: "",
  }
  constructor() {}
  ngOnInit(): void {}
}
