import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { TeamMemberDetailsComponent } from './team-member-details.component';
import { AppRoutingModule } from './app.app-routing-module';
import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HeroComponent, DashboardComponent, TeamMemberDetailsComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }


