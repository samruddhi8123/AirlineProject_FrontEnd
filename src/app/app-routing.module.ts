import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './userLogin/userLogin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [

  {
    path:'',component:HomeComponent
  },
  {
    path:'homeLink',component:HomeComponent
  },
  {
    path:'userLoginLink',component:UserLoginComponent
  },
  {
    path:'registerLink',component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
