import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { TeamMemberDetailsComponent } from './team-member-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'heroes', component: HeroComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: TeamMemberDetailsComponent },
  ])],
  declarations: [AppComponent, HeroComponent, DashboardComponent, TeamMemberDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
