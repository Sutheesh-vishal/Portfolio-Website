import { Component } from '@angular/core';

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'AZ-900 & AZ-204 Certificate',
      description: 'Holding certifications in AZ-900 - Azure Fundamentals and AZ-204 - Azure Developer Associate.',
      icon: 'assets/certificate-icon.png' // Adjust the path to your icon
    },
    {
      title: 'LeetCode Problems',
      description: 'Solved 3 DSA problems in LeetCode.',
      icon: 'assets/leetcode-icon.png' // Adjust the path to your icon
    },
    {
      title: 'Annual Performance',
      description: 'Achieved "Exceeding" performance rating for the year 2023-2024.',
      icon: 'assets/performance-icon.png' // Adjust the path to your icon
    }
  ];
}
