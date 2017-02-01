import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './team-member';


function getUnique( input: string[]){
   var u = {}, a: string[] = [];
   input.forEach( (i, index) => {
      if(!u[i]) {
        a.push(i);
        u[i] = 1;
      }
   });
//    for(var i = 0, l = input.length; i < l; ++i){
//       if(u.hasOwnProperty(input[i])) {
//          continue;
//       }
//       a.push(input[i]);
//       u[input[i]] = 1;
//    }
   return a;
}

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {

    heros: Hero[];
    teams: string[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getTeamMembers().then(heros => {
            this.heros = heros.slice(0, 4);
            this.teams = getUnique(heros.map( hero => hero.team));
            console.log(this.teams);
        }
        );

    }

}