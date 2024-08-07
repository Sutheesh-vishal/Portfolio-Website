import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  downloadCv() {
    const link = document.createElement("a");
    link.href = './assets/cv.docx';
    link.download = "resume.docx";
    
    link.click();
  }

}
