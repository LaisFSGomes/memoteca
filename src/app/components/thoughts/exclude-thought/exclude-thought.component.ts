import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Component } from '@angular/core';
import { ThoughtType } from '../thought';

@Component({
  selector: 'app-exclude-thought',
  templateUrl: './exclude-thought.component.html',
  styleUrls: ['./exclude-thought.component.css'],
})
export class ExcludeThoughtComponent {
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
  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      });
    }
  }
  cancel() {
    this.router.navigate(['/listarPensamentos']);
  }
}
