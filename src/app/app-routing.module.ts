import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AchievementsComponent } from './Components/achievements/achievements.component';
import { ProjectsComponent } from './Components/projects/project.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {path:'Skills',component:SkillsComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Achievements',component:AchievementsComponent},
  {path:'Projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
