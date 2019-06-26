import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-github-user-followers',
  templateUrl: './github-user-followers.component.html',
  styleUrls: ['./github-user-followers.component.css']
})
export class GithubUserFollowersComponent implements OnInit {
  @Input() userName:string;
  followers;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.viewFollowers();
  }
  viewFollowers(){
    console.log("calling viewfollwers method"+ this.userName);
    this.followers=this.userService.getFollowers(this.userName);    
  }
}