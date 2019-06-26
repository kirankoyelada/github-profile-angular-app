import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-user-profile',
  templateUrl: './github-user-profile.component.html',
  styleUrls: ['./github-user-profile.component.css']
})
export class GithubUserProfileComponent implements OnInit {
  users;
  searchkeyword:string;
  user:Observable<any>;
  isSearch:boolean=false;
  constructor(private userService:UserService){
  }
  getUsers(){
    this.users= this.userService.getUsers();
  }
  ngOnInit() {
    this.getUsers();
  }
  getUser(userName:string){
    console.log(userName);
    if(userName != ""){
      this.isSearch=true;
      this.userService.getUser(userName).subscribe(x=>this.user=x);
    }else{
      this.isSearch=false;
      this.getUsers();
    }
    
  }
}