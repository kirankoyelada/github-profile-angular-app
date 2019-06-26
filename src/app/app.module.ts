import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';
import { GithubUserFollowersComponent } from './github-user-followers/github-user-followers.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubUserProfileComponent,
    GithubUserFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
