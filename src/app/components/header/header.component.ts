import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchQuery = "";

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  search(){
    if (this.searchQuery != ""){
      this.data.getGifByName(this.searchQuery);
    }
  }

  enterPress(event){
    console.log(event);
  }

}
