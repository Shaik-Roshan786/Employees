import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    { name: 'image7.jpg', },
    { name:'image8.jpg',  },
    { name: 'image9.jpg',  },
  ];

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }


  ngOnInit(): void {
  }

}
