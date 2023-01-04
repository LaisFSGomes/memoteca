import { Component } from "@angular/core";

@Component({
  selector: "app-list-thoughts",
  templateUrl: "./list-thoughts.component.html",
  styleUrls: ["./list-thoughts.component.css"],
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
      content: "hello world",
      author: "Dev",
      model: "modelo1",
    },
    {
      content: `The Beatles were an English rock band, formed in Liverpool in 1960,
      that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.
      They are regarded as the most influential band of all time[1] and were integral
      to the development of 1960s counterculture and popular music's recognition as an
      art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated
      elements of classical music and traditional pop in innovative ways; the band also
      explored music styles ranging from folk and Indian music to psychedelia and hard rock.
      As pioneers in recording, songwriting and artistic presentation, the Beatles
      revolutionised many aspects of the music industry and were often publicised as
      leaders of the era's youth and sociocultural movements`,
      author: "Wikipedia",
      model: "modelo2",
    },
    {
      content: "help",
      author: "The Beatles",
      model: "modelo1",
    },
  ];
}
