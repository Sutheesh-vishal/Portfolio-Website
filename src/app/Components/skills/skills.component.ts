import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('skill') skills!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.skills.forEach(skill => {
      const element = skill.nativeElement as HTMLDivElement;
      const progress = element.getAttribute('data-progress');
      if (progress !== null) {
        const progressValue = parseInt(progress, 10);
        if (!isNaN(progressValue)) {
          const skillBar = document.createElement('div');
          skillBar.className = 'skill-bar';
          
          const skillProgress = document.createElement('div');
          skillProgress.className = 'skill-progress';
          skillProgress.style.width = '0%'; // Start from 0%
          skillBar.appendChild(skillProgress);
          element.appendChild(skillBar);

          // Trigger the animation
          setTimeout(() => {
            skillProgress.style.width = `${progressValue}%`;
          }, 100);
        } else {
          console.error(`Invalid progress value: ${progress}`);
        }
      } else {
        console.error(`Missing data-progress attribute on skill element`);
      }
    });
  }
}
