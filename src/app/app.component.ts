import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Neat Tree',
      imageUrl : 'assets/tree.jpeg',
      username : 'nature', 
      content : 'I saw this neat tree today'    
  },
    {
      title : 'Snowy mountaint',
      imageUrl : 'assets/mountain.jpeg',
      username : 'mountainLover', 
      content : 'Here is a picture of mountain'    
  },
    {
      title : 'Mountain biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biking1222', 
      content : 'I did some biking today'    
    }
  ]
}
