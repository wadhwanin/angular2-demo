import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { TeamMemberDetailsComponent } from './team-member-details.component';

const routes: Routes = [
    { path: 'heroes', component: HeroComponent },
    { path: 'heroes/:team', component: HeroComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: TeamMemberDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }