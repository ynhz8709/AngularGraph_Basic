import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
   background(){
     const image= { "background-image":  "url(../../../assets/home-background.jpg)"};
     return image;
   }

}
