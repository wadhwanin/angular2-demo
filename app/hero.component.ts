import { Component, OnInit } from '@angular/core';
import { Hero } from './team-member';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroComponent implements OnInit {
  title = 'FPS Heros';

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  getHeroes(): void {

    this.route.params.forEach((params: Params) => {
      console.log(params)
      if (params['team']) {
        let team = params['team'];
        this.heroService.getMembersOfTeam(team)
          .then(x => this.heroes = x);
      } else {
        this.heroService.getTeamMembers()
          .then(x => this.heroes = x);
      }
    });

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void { this.router.navigate(['/detail', this.selectedHero.id]); }

   goBack(): void { this.location.back(); }

}







