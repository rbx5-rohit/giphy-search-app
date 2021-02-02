import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent implements OnInit, OnDestroy {

  response: any[];
  sub: Subscription;

  constructor(private data: DataService) { }
  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

  ngOnInit(): void {
   this.data.getTrendingGifs();
   this.sub = this.data.getGifs()
   .subscribe((res) => {
     this.response = res;
   });
  }



}
