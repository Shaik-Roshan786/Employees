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

  // videos = [
  //   { name: 'video1.mp4', },
  //   { name:'video2.mp4',  },
  // ];

  

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

// items = [
//   { url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9bvcyGyzj7Y') },
//   { url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2_CBEakRtPQ') },
//   { url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/mRDa7Le5ZqU') },
// ];

  ngOnInit(): void {
  }
  // playVideo(item: any) {
  //   item.playing = true;
  // }
  
  // stopPlaying(item: any) {
  //   item.playing = false;
  // }
  

}
