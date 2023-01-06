import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Component } from '@angular/core';
import { ThoughtType } from '../thought';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent {
  thought: ThoughtType = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(Number(id)).subscribe((thought) => {
      this.thought = thought;
    });
  }
  editThought() {
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  }
  cancelThought() {
    this.router.navigate(['/listarPensamentos']);
  }
}
