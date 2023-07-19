import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    fetch('http://localhost:5000/video/videos')
      .then(response => response.json())
      .then(data => {
        this.videos = data.video;
        console.log(this.videos);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }

  delete(id: any) {
    fetch(`http://localhost:5000/video/deleteemp/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log(`Video with ID ${id} deleted successfully.`);
        // Optionally, you can fetch the updated list of videos after deletion:
        this.fetchVideos();
      })
      .catch(error => {
        console.error(`Error deleting video with ID ${id}:`, error);
      });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
