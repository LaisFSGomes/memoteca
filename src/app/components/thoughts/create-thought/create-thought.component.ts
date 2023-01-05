import { ThoughtService } from './../thought.service';
import { ThoughtType } from './../thought';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought: ThoughtType = {
    content: "",
    author: "",
    model: "",
  }
  constructor(
    private service: ThoughtService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(["/listarPensamentos"]);
    });
  }
  cancelThought() {
    this.router.navigate(["/listarPensamentos"]);
  }
}
