import { Component } from '@angular/core';


@Component({
  selector: 'app-text-select',
  templateUrl: './text-select.component.html',
  styleUrls: ['./text-select.component.css']
})
export class TextSelectComponent {
  constructor() {
    let selection = window.getSelection()
    document.addEventListener('selectionchange', e => {
      let stringSelection = selection?.toString()
      if (stringSelection != '') {
        console.log('stringSelection: ', stringSelection);
      }
    });
  }

}
