import { Component } from '@angular/core';

import { Post } from "../model/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-blog';
  
  posts = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, id ultricies ligula ex quis nunc."),
    new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, id ultricies ligula ex quis nunc."),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, id ultricies ligula ex quis nunc.")
  ]
}
