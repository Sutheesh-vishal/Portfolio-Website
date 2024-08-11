import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Car Info Management System',
      description: 'A comprehensive system for managing car information, including inventory, sales, and service records.',
      logo: 'assets/car-info-logo.png' // Adjust the path to your logo or image
    },
    {
      title: 'Employee Management System',
      description: 'An efficient system to manage employee data, including payroll, attendance, and performance reviews.',
      logo: 'assets/employee-management-logo.png' // Adjust the path to your logo or image
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and achievements with a modern and responsive design.',
      logo: 'assets/portfolio-website-logo.png' // Adjust the path to your logo or image
    }
  ];
}
