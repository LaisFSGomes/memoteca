import { ThoughtService } from './../thought.service';
import { ThoughtType } from './../thought';
import { Component } from "@angular/core";

@Component({
  selector: "app-list-thoughts",
  templateUrl: "./list-thoughts.component.html",
  styleUrls: ["./list-thoughts.component.css"],
})
export class ListThoughtsComponent {
  thoughtsList: ThoughtType[] = [];
  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
    });
  }
}
