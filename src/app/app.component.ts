import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'yellow';
  images: string[] = ['/assets/book.png', '/assets/download.png','/assets/images.png'];
}
