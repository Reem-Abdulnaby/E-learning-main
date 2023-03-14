import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralComponent } from './general/general.component';
import { ChangPassComponent } from './chang-pass/chang-pass.component';
import { DetailsComponent } from './details/details.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MainComponent } from './main/main.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe} from '../../pipes/search-filter.pipe';
export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  // { path: 'dashboard', component: DashboardComponent },
  {path:'', component: DashboardComponent,
    children: [
    {path:'dashBoard',component:MainComponent},
    {path:'general',component:GeneralComponent},
    {path:'changPassword',component:ChangPassComponent},
    {path:'details',component:DetailsComponent},
    {path:'social',component:SocialLinksComponent},
      { path: 'conections', component: ConnectionsComponent },
      { path: 'courses', component: MainComponent },


  ]
},
]
@NgModule({
  declarations: [
    MainComponent,
    SigninComponent,
    DetailsComponent,
    GeneralComponent,
    SummaryComponent,
    ChangPassComponent,
    DashboardComponent,
    SocialLinksComponent,
    ConnectionsComponent,
    SearchFilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class UserModule { }
