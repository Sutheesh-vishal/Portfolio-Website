import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Wells Fargo',
      project: 'App Modernization/Migration',
      description: 'Migration of On-premise Dotnet Applications (Web Applications & Console apps (batch jobs)) to the desired cloud platforms such as Azure, following Agile SDLC & Quality gate.',
      logo: 'assets/wells-fargo-logo.png' // Adjust the path to your logo
    },
    {
      company: 'Mercedes-Benz Research and Development India',
      project: 'IIB_Project',
      description: 'Migration of Code first apps to Logic first app (Azure Cloud), where I have implemented various major Azure services such as Logic Apps, HTTP Triggers, Azure Key Vault, App Insights, App Services, Storage Accounts, Azure Sql, Resource groups, Queues & Topics and other azure services to design, deploy and Migrate Enterprise Applications.',
      logo: 'assets/mercedes-logo.png' // Adjust the path to your logo
    }
  ];
}
