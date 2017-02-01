import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './team-member';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {

    heros: Hero[];
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getTeamMembers().then(heros => {
            this.heros = heros;
        }
        );

    }

}