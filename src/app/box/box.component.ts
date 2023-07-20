import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  box1 = {
    'width' : '300px',
    'height' : '200px',
    'border' : '2px solid blue',
  }
  box2 = {
    'width' : '10px',
    'height' : '50px',
    'border' : '2px solid blue',
  }
}
