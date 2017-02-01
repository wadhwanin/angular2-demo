import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';


@Component(
    {
        moduleId: module.id,
        selector: 'my-app',
        styleUrls: [ './app.component.css' ],
        template: `<h1>{{title}}</h1> 
         <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a> 
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
           </nav>
            <router-outlet></router-outlet> `
    }
)
export class AppComponent {
    title = 'Financial Planning Services';
} 


