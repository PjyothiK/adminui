import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users&roles/users.component';
import { UserstableComponent } from './components/users&roles/userstable/userstable.component';
import { RolestableComponent } from './components/users&roles/rolestable/rolestable.component';
import { CreateuserComponent } from './components/users&roles/userstable/createuser/createuser.component';
import { UpdateuserComponent } from './components/users&roles/userstable/updateuser/updateuser.component';
import { DeleteuserComponent } from './components/users&roles/userstable/deleteuser/deleteuser.component';
import { CreateroleComponent } from './components/users&roles/rolestable/createrole/createrole.component';
import { UpdateroleComponent } from './components/users&roles/rolestable/updaterole/updaterole.component';
import { DeleteroleComponent } from './components/users&roles/rolestable/deleterole/deleterole.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    UsersComponent,
    UserstableComponent,
    RolestableComponent,
    CreateuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    CreateroleComponent,
    UpdateroleComponent,
    DeleteroleComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
