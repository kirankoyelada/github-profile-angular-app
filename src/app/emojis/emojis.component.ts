import { Component, OnInit } from '@angular/core';
import { EmojisService } from 'src/services/emojis.service';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {
  emojis:string[]=[];
  keys:string[]=[];
  constructor(private emojisService:EmojisService) { }

  ngOnInit() {
    this.emojisService.getEmojis().subscribe(x=>{
      this.emojis=x;
    });
    console.log(this.emojis);
  }

}
