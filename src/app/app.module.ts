import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';
import { GithubUserFollowersComponent } from './github-user-followers/github-user-followers.component';
import { EmojisComponent } from './emojis/emojis.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubUserProfileComponent,
    GithubUserFollowersComponent,
    EmojisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
