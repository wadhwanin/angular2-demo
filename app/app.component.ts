import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';


@Component(
    {
        selector: 'my-app',
        template: `<h1>{{title}}</h1> 
        
         <nav>
          <a routerLink="/dashboard">Dashboard</a> 
          <a routerLink="/heroes">Heroes</a>
           </nav>
            <router-outlet></router-outlet> `
    }
)
export class AppComponent {
    title = 'Tour of Heroes';
} 
