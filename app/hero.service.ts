import {Injectable} from '@angular/core';
import {Hero} from './team-member';
import {TEAM_MEMBERS} from './mock-team-members';

@Injectable()
export class HeroService{
    getTeamMembers(): Promise<Hero[]> {
        return Promise.resolve(TEAM_MEMBERS);
    }
}