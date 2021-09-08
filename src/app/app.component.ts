import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to training!!';
  card='../assets/doramon.png';
  choice = false;
  show()
  {
    alert("clicked");
  }
}
