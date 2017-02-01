import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './team-member';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'team-member-details',
  templateUrl: './team-member-details.component.html',
  providers: [HeroService]
})

export class TeamMemberDetailsComponent implements OnInit {
  @Input()
  hero: Hero;
  navigated = false; // true if navigated here


  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    console.log(this.location);
    this.route.params.switchMap((params: Params) => this.heroService.getTeamMember(+params['id']))
      .subscribe(hero => {
        console.log(hero);
        this.hero = hero
    }
      );

      
  }

  // ngOnInit(): void {
  //   this.route.params.forEach((params: Params) => {
  //     console.log(params)
  //     if (params['id'] !== undefined) {
  //       let id = +params['id'];
  //       this.navigated = true;
  //       this.heroService.getTeamMember(id)
  //         .then(x => this.hero = x);
  //     } else {
  //       this.navigated = false;
  //       this.hero = new Hero();
  //     }
  //   });
  // }

  goBack(): void { this.location.back(); }
}

