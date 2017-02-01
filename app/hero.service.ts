import { Injectable } from '@angular/core';
import { Hero } from './team-member';
import { TEAM_MEMBERS } from './mock-team-members';

@Injectable()
export class HeroService {
    getTeamMembers(): Promise<Hero[]> {
        return Promise.resolve(TEAM_MEMBERS);
    }

    getTeamMember(id: number): Promise<Hero> {
        console.log(id);

        return this.getTeamMembers()
            .then(heroes => {
                console.log(heroes);
                console.log(heroes.find(hero => hero.id === id));
                return heroes.find(hero => hero.id === id);
            }
            );
    }

    getMembersOfTeam(team: string): Promise<Hero[]> {
        return this.getTeamMembers()
        .then( heros => heros.filter(hero => hero.team === team));
    }
}